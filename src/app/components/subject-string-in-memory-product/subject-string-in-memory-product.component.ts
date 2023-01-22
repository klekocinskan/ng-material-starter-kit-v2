import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-subject-string-in-memory-product',
  styleUrls: ['./subject-string-in-memory-product.component.scss'],
  templateUrl: './subject-string-in-memory-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectStringInMemoryProductComponent {
  private _productSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  readonly products$: Observable<ProductsModel[]> = this._productSubject.asObservable().pipe(switchMap(() => this._productsService.getAll()));
  private _productsDetailsSubject: Subject<number> = new Subject<number>();
  public productsDetails$: Observable<ProductsModel> = this._productsDetailsSubject.asObservable().pipe(
    switchMap(data => this._productsService.getOne(data)));

  constructor(private _productsService: ProductsService) {
  }

  onShowDetailsButtonClicked(product: ProductsModel) {
    this._productsDetailsSubject.next(product.id);
  }
}
