import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatChipsModule } from '@angular/material/chips';
import { SortSingleProductsBackendComponent } from './sort-single-products-backend.component';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, RouterLinkWithHref, RouterLink, MatChipsModule],
  declarations: [SortSingleProductsBackendComponent],
  providers: [],
  exports: [SortSingleProductsBackendComponent]
})
export class SortSingleProductsBackendComponentModule {
}
