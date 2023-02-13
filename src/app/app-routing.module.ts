import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteringSingleProductCategoryComponent } from './components/filtering-single-product-category/filtering-single-product-category.component';
import { FilteringSingleBeProductComponent } from './components/filtering-single-be-product/filtering-single-be-product.component';
import { FilteringSingleProductCategoryComponentModule } from './components/filtering-single-product-category/filtering-single-product-category.component-module';
import { FilteringSingleBeProductComponentModule } from './components/filtering-single-be-product/filtering-single-be-product.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: FilteringSingleProductCategoryComponent }, { path: 'products-be', component: FilteringSingleBeProductComponent }]), FilteringSingleProductCategoryComponentModule, FilteringSingleBeProductComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
