import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteringSingleBeProductComponent } from './filtering-single-be-product.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [FilteringSingleBeProductComponent],
  providers: [],
  exports: [FilteringSingleBeProductComponent]
})
export class FilteringSingleBeProductComponentModule {
}
