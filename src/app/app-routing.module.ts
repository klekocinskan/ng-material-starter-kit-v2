import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsCatFactsComponent } from './components/details-cat-facts/details-cat-facts.component';
import { DetailAgeComponent } from './components/detail-age/detail-age.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { DetailsCartComponent } from './components/details-cart/details-cart.component';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { EditTagComponent } from './components/edit-tag/edit-tag.component';
import { EditJobsFormComponent } from './components/edit-jobs-form/edit-jobs-form.component';
import { EditProductWithCategoryComponent } from './components/edit-product-with-category/edit-product-with-category.component';
import { DetailsCatFactsComponentModule } from './components/details-cat-facts/details-cat-facts.component-module';
import { DetailAgeComponentModule } from './components/detail-age/detail-age.component-module';
import { DetailsProductComponentModule } from './components/details-product/details-product.component-module';
import { DetailsCartComponentModule } from './components/details-cart/details-cart.component-module';
import { DetailsUserComponentModule } from './components/details-user/details-user.component-module';
import { EditTagComponentModule } from './components/edit-tag/edit-tag.component-module';
import { EditJobsFormComponentModule } from './components/edit-jobs-form/edit-jobs-form.component-module';
import { EditProductWithCategoryComponentModule } from './components/edit-product-with-category/edit-product-with-category.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cat-fact', component: DetailsCatFactsComponent }, { path: 'age/:name', component: DetailAgeComponent }, { path: 'product/:id', component: DetailsProductComponent }, { path: 'cart/:id', component: DetailsCartComponent }, { path: 'user/:id', component: DetailsUserComponent }, { path: 'edit-tag/:id', component: EditTagComponent }, { path: 'edit-job/:id', component: EditJobsFormComponent }, { path: 'edit-product/:id', component: EditProductWithCategoryComponent }]), DetailsCatFactsComponentModule, DetailAgeComponentModule, DetailsProductComponentModule, DetailsCartComponentModule, DetailsUserComponentModule, EditTagComponentModule, EditJobsFormComponentModule, EditProductWithCategoryComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
