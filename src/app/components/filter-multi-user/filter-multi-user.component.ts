import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserRoleModel } from '../../models/user-role.model';
import { DepartmentModel } from '../../models/department.model';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-filter-multi-user',
  styleUrls: ['./filter-multi-user.component.scss'],
  templateUrl: './filter-multi-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterMultiUserComponent {

  readonly roles$: Observable<UserRoleModel[]> = this._userService.getRoles();
  readonly department$: Observable<DepartmentModel[]> = this._userService.getDepartment();
  private _selectedRolesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _selectedDepartmentSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');


  onRoleChanged(role: number): void {
    this._selectedRolesSubject.next(role)
  }

  onDepartmentChanged(department: string): void {
    this._selectedDepartmentSubject.next(department)
  }

  readonly users$: Observable<UserModel[]> = combineLatest([
    this._userService.getAll(),
    this._selectedRolesSubject,
    this._selectedDepartmentSubject
  ]).pipe(
    map(
      ([users, role, department]) => {
    return users.filter(
      (user) =>{
        return(
          (role != 0 ? user.roleId === role : true) &&
          (department != '' ? user.departmentId === +department : true) 
        )
       
      }
      
    )
  }))

  constructor(private _userService: UserService) {
  }
}
