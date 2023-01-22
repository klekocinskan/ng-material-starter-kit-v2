import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductMetadataService } from 'src/app/services/product-metadata.service';
import { SnackbarProductsModel } from '../../models/snackbar-products.model';
import { SnackbarProductsService } from '../../services/snackbar-products.service';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-string-external-snackbar-product',
  styleUrls: ['./string-external-snackbar-product.component.scss'],
  templateUrl: './string-external-snackbar-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StringExternalSnackbarProductComponent {
  private _productsSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public productsSubject$: Observable<SnackbarProductsModel[]> = this._productsSubject.asObservable().pipe(switchMap(data => this._snackbarProductsService.getAll()));
  private _productDetailsSubject: Subject<string> = new Subject<string>();

  constructor(private _snackbarProductsService: SnackbarProductsService, 
              private _productMetadataService : ProductMetadataService,
              private _snackBar: MatSnackBar) {

                this._productDetailsSubject.subscribe(data =>{
                  this.showSnackBar(data);
               }
                )
  }

  showSnackBar(id: string){
    this._productMetadataService.getProductDetails(id).subscribe(
      (data) => {
        let minStockLevel = data.find( numOfProduct => numOfProduct.stock < 20)
        if(minStockLevel){
          this._snackBar.open('Hurry up! There are only ' + minStockLevel.stock + ' left!')
      }
      }
    )
  }

  onButtonClick(id: string){
      this._productDetailsSubject.next(id);
  }
}
