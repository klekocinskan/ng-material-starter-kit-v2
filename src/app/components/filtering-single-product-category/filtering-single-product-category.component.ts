import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-filtering-single-product-category',
  styleUrls: ['./filtering-single-product-category.component.scss'],
  templateUrl: './filtering-single-product-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteringSingleProductCategoryComponent {

  private _selectedCategorySubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  public selectedCategory$: Observable<string | undefined> = this._selectedCategorySubject.asObservable();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(), this.selectedCategory$
  ]).pipe(
    map(([products,selectedCategory])=>{
      if(!selectedCategory){
        return products;
      }
      return products.filter( products => products.category === selectedCategory);
    })
  );
  readonly categories$: Observable<string[]> = this._productService.getAllCategories();


  constructor(private _productService: ProductService) {
  }

  onFilteringChanged(category: string): void {
    this._selectedCategorySubject.next(category);
  }
}
