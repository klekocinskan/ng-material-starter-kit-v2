import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sorting-single-user',
  styleUrls: ['./sorting-single-user.component.scss'],
  templateUrl: './sorting-single-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingSingleUserComponent {
  readonly sortedOption$: Observable<string[]> = of(['dsc', 'asc']);
  private _sortedUsersSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public sortedUsers$: Observable<string> = this._sortedUsersSubject.asObservable();

  readonly users$: Observable<UserModel[]> = combineLatest(
    [this._userService.getAll(),
    this.sortedUsers$]
  ).pipe(

    map(([users, sortedUsers]) => {
      if (sortedUsers === '') {
        return users;
      }
      return users.sort((x, y) => {
        if (sortedUsers === 'dsc') {
          return x.email?.toUpperCase() < y.email?.toUpperCase() ? 1 : -1;
        } else {
          return x.email?.toUpperCase() > y.email?.toUpperCase() ? 1 : -1;
        }
      })

    })
  );


  constructor(private _userService: UserService) {
    
  }

  onSortingChanged(sortOption: string): void {
    this._sortedUsersSubject.next(sortOption);
  }
}
