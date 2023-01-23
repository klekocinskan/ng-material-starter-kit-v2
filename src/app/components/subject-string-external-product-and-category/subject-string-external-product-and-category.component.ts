import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-subject-string-external-product-and-category',
  styleUrls: ['./subject-string-external-product-and-category.component.scss'],
  templateUrl: './subject-string-external-product-and-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectStringExternalProductAndCategoryComponent {
  private _productsSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public products$: Observable<ProductsModel[]> = this._productsSubject.asObservable().pipe(switchMap(data => this._productsService.getAll()));
  private _productDetailsSubject: Subject<string> = new Subject<string>();
  public productDetails$: Observable<ProductsModel[]> = this._productDetailsSubject.asObservable().pipe(switchMap(data => this._productsService.getByCategory(data)));

  constructor(private _productsService: ProductsService) {
  }

  onShowDetailsButtonClicked(productCategory: string){
    this._productDetailsSubject.next(productCategory);
  }


}
