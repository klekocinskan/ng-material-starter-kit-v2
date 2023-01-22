import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-subject-void-delete-product',
  styleUrls: ['./subject-void-delete-product.component.scss'],
  templateUrl: './subject-void-delete-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectVoidDeleteProductComponent {
  private _refreshDeletedProductListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public products$: Observable<ProductsModel[]> = this._refreshDeletedProductListSubject.asObservable().pipe(switchMap(data => this._productsService.getAll()));

  constructor(private _productsService: ProductsService) {
  }

  onRemoveButtonClicked(product: ProductsModel) {
    this._productsService.delete(product.id).subscribe(
      () => this._refreshDeletedProductListSubject.next()
    )
  }
}
