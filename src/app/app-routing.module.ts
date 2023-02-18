import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteringSingleProductCategoryComponent } from './components/filtering-single-product-category/filtering-single-product-category.component';
import { FilteringSingleBeProductComponent } from './components/filtering-single-be-product/filtering-single-be-product.component';
import { FilteringSingleUserComponent } from './components/filtering-single-user/filtering-single-user.component';
import { SortSingleProductComponent } from './components/sort-single-product/sort-single-product.component';
import { SortingSingleUserComponent } from './components/sorting-single-user/sorting-single-user.component';
import { FilterMultiUserComponent } from './components/filter-multi-user/filter-multi-user.component';
import { SortingFieldCryptoComponent } from './components/sorting-field-crypto/sorting-field-crypto.component';
import { FilteringSingleProductCategoryComponentModule } from './components/filtering-single-product-category/filtering-single-product-category.component-module';
import { FilteringSingleBeProductComponentModule } from './components/filtering-single-be-product/filtering-single-be-product.component-module';
import { FilteringSingleUserComponentModule } from './components/filtering-single-user/filtering-single-user.component-module';
import { SortSingleProductComponentModule } from './components/sort-single-product/sort-single-product.component-module';
import { SortingSingleUserComponentModule } from './components/sorting-single-user/sorting-single-user.component-module';
import { FilterMultiUserComponentModule } from './components/filter-multi-user/filter-multi-user.component-module';
import { SortingFieldCryptoComponentModule } from './components/sorting-field-crypto/sorting-field-crypto.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: FilteringSingleProductCategoryComponent }, { path: 'products-be', component: FilteringSingleBeProductComponent }, { path: 'users', component: FilteringSingleUserComponent }, { path: 'sorted-products', component: SortSingleProductComponent }, { path: 'users-sorted', component: SortingSingleUserComponent }, { path: 'filter-multi-user', component: FilterMultiUserComponent }, { path: 'crypto', component: SortingFieldCryptoComponent }]), FilteringSingleProductCategoryComponentModule, FilteringSingleBeProductComponentModule, FilteringSingleUserComponentModule, SortSingleProductComponentModule, SortingSingleUserComponentModule, FilterMultiUserComponentModule, SortingFieldCryptoComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
