import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortSingleProductsBackendComponent } from './components/sort-single-products-backend/sort-single-products-backend.component';
import { SortSingleProductsBackendComponentModule } from './components/sort-single-products-backend/sort-single-products-backend.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-2-route-sort-single-products-backend', component: SortSingleProductsBackendComponent }]), SortSingleProductsBackendComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
