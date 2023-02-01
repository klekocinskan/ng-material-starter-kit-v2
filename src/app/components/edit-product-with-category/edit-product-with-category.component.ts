import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { ProductModelEdit } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product-with-category',
  styleUrls: ['./edit-product-with-category.component.scss'],
  templateUrl: './edit-product-with-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProductWithCategoryComponent {
  readonly product$: Observable<ProductModelEdit> = this._activatedRoute.params.pipe(switchMap(data => this._productService.getOneProduct(data['id'])));
  readonly categories$: Observable<string[]> = this._productService.getCategories();

  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    price: new FormControl()
  });

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    this.product$.subscribe((data) =>
      this.productForm.patchValue(data))
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data)=> this._productService.updateProduct({ 
        id: data['id'], 
        ...productForm.value })
      )
    ).subscribe();



    
  }
}
