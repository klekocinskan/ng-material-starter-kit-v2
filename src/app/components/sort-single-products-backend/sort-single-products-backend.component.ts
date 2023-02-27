import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sort-single-products-backend',
  styleUrls: ['./sort-single-products-backend.component.scss'],
  templateUrl: './sort-single-products-backend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortSingleProductsBackendComponent {
  readonly sortOptions$: Observable<string[]> = of(['asc', 'desc']);
  readonly products$: Observable<ProductModel[]> = this._activatedRoute 
      .queryParams.pipe(
        switchMap((data)=>
        this._productService.getAllSorted(data['sort']))
      );

  constructor(private _productService: ProductService,
              private _activatedRoute: ActivatedRoute) {
  }
}
