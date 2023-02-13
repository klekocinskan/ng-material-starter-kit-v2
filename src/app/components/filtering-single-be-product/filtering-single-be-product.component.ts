import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-filtering-single-be-product',
  styleUrls: ['./filtering-single-be-product.component.scss'],
  templateUrl: './filtering-single-be-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteringSingleBeProductComponent {
  private _selectedCategorySubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  public selectedCategory$: Observable<string | undefined> = this._selectedCategorySubject.asObservable();


  readonly products$: Observable<ProductModel[]> = this.selectedCategory$.pipe(
    switchMap(
      (data: string | undefined) =>{
        if(!data){
            return this._productService.getAll();
        }
        return this._productService.getAllInCategory(data as string)
      } ));
  readonly categories$: Observable<string[]> = this._productService.getAllCategories();

  constructor(private _productService: ProductService) {
  }

  onFilteringChanged(category: string): void {
    this._selectedCategorySubject.next(category);
  }
}
