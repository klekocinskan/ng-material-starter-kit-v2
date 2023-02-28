import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortSingleProductsBackendComponent } from './components/sort-single-products-backend/sort-single-products-backend.component';
import { SearchMultiJobsComponent } from './components/search-multi-jobs/search-multi-jobs.component';
import { SortSingleProductsBackendComponentModule } from './components/sort-single-products-backend/sort-single-products-backend.component-module';
import { SearchMultiJobsComponentModule } from './components/search-multi-jobs/search-multi-jobs.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-2-route-sort-single-products-backend', component: SortSingleProductsBackendComponent }, { path: 'search-route-multi-jobs', component: SearchMultiJobsComponent }]), SortSingleProductsBackendComponentModule, SearchMultiJobsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
