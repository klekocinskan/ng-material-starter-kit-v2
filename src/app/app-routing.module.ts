import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortSingleComponent } from './components/sort-single-products-component/sort-single-products.component';
import { SortSingleComponentModule } from './components/sort-single-products-component/sort-single-products.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-2-form-sorting-single-product', component: SortSingleComponent }]), SortSingleComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
