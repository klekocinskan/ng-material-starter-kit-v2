import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { combineLatest, map, Observable, of } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sort-single',
  styleUrls: ['./sort-single-products.component.scss'],
  templateUrl: './sort-single-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortSingleComponent {
  readonly productsSort = new FormControl('', Validators.required);
  readonly sortOption$ = of(['asc', 'dsc']);

  constructor(private _productService: ProductService) {
  }

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.productsSort.valueChanges
  ]).pipe(map(([products, sortOption])=>{
    if(sortOption){
      return products.sort((x,y)=>{
        if(sortOption === 'dsc'){
          return x.title?.toUpperCase() < y.title?.toUpperCase() ? 1 : -1;
        }else{
          return x.title?.toUpperCase() > y.title?.toUpperCase() ? 1 : -1;
        }
      })
    }
      return products;
    
    
  }
  ))
}
