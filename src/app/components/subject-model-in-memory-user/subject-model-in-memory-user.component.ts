import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserWithAvatarModel } from '../../models/user-with-avatar.model';
import { UserWithAvatarService } from '../../services/user-with-avatar.service';

@Component({
  selector: 'app-subject-model-in-memory-user',
  styleUrls: ['./subject-model-in-memory-user.component.scss'],
  templateUrl: './subject-model-in-memory-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectModelInMemoryUserComponent {
  private _usersSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  readonly users$: Observable<UserWithAvatarModel[]> = this._usersSubject.asObservable().pipe(switchMap(data => this._userWithAvatarService.getAll()));
  private _usersDetailsSubject: Subject<any> = new Subject<any>();
  public usersDetails$: Observable<UserWithAvatarModel> = this._usersDetailsSubject.asObservable();

  constructor(private _userWithAvatarService: UserWithAvatarService) {
  }

  onButtonClicked(user: UserWithAvatarModel) {
    this._usersDetailsSubject.next(user);
  }

  onCancelButtonClicked(){
    this._usersDetailsSubject.next(null);
  }
}
