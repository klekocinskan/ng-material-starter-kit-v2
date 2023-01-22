import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-subjec-void-external-users',
  styleUrls: ['./subjec-void-external-users.component.scss'],
  templateUrl: './subjec-void-external-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjecVoidExternalUsersComponent {
  // readonly users$: Observable<UserModel[]> = this._userService.getAll();
  private _refreshUserSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public users$: Observable<UserModel[]> = this._refreshUserSubject.asObservable().pipe(switchMap(data => this._userService.getAll()));

  constructor(private _userService: UserService) {
  }

  onClickRefreshButton() {
    this._userService.getAll().subscribe(
      () => this._refreshUserSubject.next()
    );
  }
}
