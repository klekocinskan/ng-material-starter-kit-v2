import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRoleModel } from '../../models/user-role.model';
import { DepartmentModel } from '../../models/department.model';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-filter-and-sort-multi-users',
  styleUrls: ['./filter-and-sort-multi-users.component.scss'],
  templateUrl: './filter-and-sort-multi-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterAndSortMultiUsersComponent {
  readonly sortOptions$: Observable<string[]> = of(['asc', 'dsc']);
  readonly roles$: Observable<UserRoleModel[]> = this._userService.getRoles();
  readonly department$: Observable<DepartmentModel[]> = this._userService.getDepartment();
  private _sortOptionsSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public sortOptionsChoosed$: Observable<string> = this._sortOptionsSubject.asObservable();
  private _departmentSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _rolesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  readonly users$: Observable<UserModel[]> = combineLatest([
    this._userService.getAll(),
    this.sortOptionsChoosed$,
    this._departmentSubject,
    this._rolesSubject
  ]).pipe(
    map(([users, sortOptionsChoosed, department, role]) => {

      users.sort((x, y) => {
        return this.sortAscDsc(+x.email, +y.email, sortOptionsChoosed)
        })

      if(department || role){
        return users.filter(
          (user)=>
        {
            return (role != 0 ? user.roleId === role : true) &&
            (department != '' ? user.departmentId === +department : true) 
        }
        )
      }
      return users;

  
    })
  )
  
  constructor(private _userService: UserService) {
  }

  sortAscDsc(x: number, y: number, sortOption: string) {
    if (sortOption === 'dsc') {
      return x < y ? 1 : -1;
    } else {
      return x > y ? 1 : -1;
    }
  }

  onAscDscChoosed(option: string): void {
    return this._sortOptionsSubject.next(option);
  }

  onRoleChoosed(role: number): void {
    return this._rolesSubject.next(role)
  }

  onDepartmentChoosed(department: string): void{
    return this._departmentSubject.next(department);
  }
}
