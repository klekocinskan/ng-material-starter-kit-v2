import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortSingleComponent } from './components/sort-single-products-component/sort-single-products.component';
import { SortMultiJobsComponent } from './components/sort-multi-jobs/sort-multi-jobs.component';
import { SortSingleComponentModule } from './components/sort-single-products-component/sort-single-products.component-module';
import { SortMultiJobsComponentModule } from './components/sort-multi-jobs/sort-multi-jobs.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-2-form-sorting-single-product', component: SortSingleComponent }, { path: 'list-2-form-sorting-multi-jobs', component: SortMultiJobsComponent }]), SortSingleComponentModule, SortMultiJobsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
