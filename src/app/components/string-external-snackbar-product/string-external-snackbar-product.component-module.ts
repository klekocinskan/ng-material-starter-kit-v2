import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { StringExternalSnackbarProductComponent } from './string-external-snackbar-product.component';

@NgModule({
  imports: [MatListModule, CommonModule],
  declarations: [StringExternalSnackbarProductComponent],
  providers: [],
  exports: [StringExternalSnackbarProductComponent]
})
export class StringExternalSnackbarProductComponentModule {
}
