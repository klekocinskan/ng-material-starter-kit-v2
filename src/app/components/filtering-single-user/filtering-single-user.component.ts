import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserRoleModel } from '../../models/user-role.model';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-filtering-single-user',
  styleUrls: ['./filtering-single-user.component.scss'],
  templateUrl: './filtering-single-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteringSingleUserComponent {
  private _selectedRolesSubject: BehaviorSubject<UserRoleModel | undefined> = new BehaviorSubject<UserRoleModel | undefined>(undefined);
  public selectedRoles$: Observable<UserRoleModel | undefined> = this._selectedRolesSubject.asObservable();
  readonly users$: Observable<UserModel[]> = this.selectedRoles$.pipe(
    switchMap(
      (data) => {
        if(!data){
          return this._userService.getAll()
        }
        return this._userService.getAll().pipe(
          map((users) => 
              users.filter(user => user.roleId == data.id)
            )
        )
      }
      ));
    readonly roles$: Observable<UserRoleModel[]> = this._userService.getRoles();
 

  constructor(private _userService: UserService) {
  }

  onFilteringChanged(role: UserRoleModel): void {
    this._selectedRolesSubject.next(role);
  }
}
