import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-details-cart',
  styleUrls: ['./details-cart.component.scss'],
  templateUrl: './details-cart.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsCartComponent {
  readonly cart$: Observable<CartModel> = this._activatedRoute.params.pipe(switchMap(data => this._cartService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
  }
}
