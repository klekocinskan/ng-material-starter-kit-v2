import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteringSingleProductCategoryComponent } from './filtering-single-product-category.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, FlexModule],
  declarations: [FilteringSingleProductCategoryComponent],
  providers: [],
  exports: [FilteringSingleProductCategoryComponent]
})
export class FilteringSingleProductCategoryComponentModule {
}
