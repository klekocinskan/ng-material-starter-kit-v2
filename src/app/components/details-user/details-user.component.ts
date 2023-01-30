import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-details-user',
  styleUrls: ['./details-user.component.scss'],
  templateUrl: './details-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsUserComponent {
  readonly user$: Observable<UserModel> = this._activatedRoute.params.pipe(switchMap(data => this._userService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService) {
  }
}
