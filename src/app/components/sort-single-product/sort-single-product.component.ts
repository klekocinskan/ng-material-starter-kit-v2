import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sort-single-product',
  styleUrls: ['./sort-single-product.component.scss'],
  templateUrl: './sort-single-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortSingleProductComponent {
  private _sortedProductSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public sortedProduct$: Observable<string> = this._sortedProductSubject.asObservable();

  readonly sortedOption$: Observable<string[]> = of(['dsc', 'asc']);

  readonly products$: Observable<ProductModel[]> = combineLatest(
    [this._productService.getAll(),
    this.sortedProduct$]
  ).pipe(

    map(([products, sortedProduct]) => {
      return products.sort((x, y) => {
        if (sortedProduct === 'dsc') {
          return x.price < y.price ? 1 : -1;
        } else {
          return x.price > y.price ? 1 : -1;
        }
      })
    })
  );





  constructor(private _productService: ProductService) {
  }

  onSortingChanged(option: string): void {
    this._sortedProductSubject.next(option);
  }
}
