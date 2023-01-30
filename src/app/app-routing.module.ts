import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsCatFactsComponent } from './components/details-cat-facts/details-cat-facts.component';
import { DetailAgeComponent } from './components/detail-age/detail-age.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { DetailsCartComponent } from './components/details-cart/details-cart.component';
import { DetailsCatFactsComponentModule } from './components/details-cat-facts/details-cat-facts.component-module';
import { DetailAgeComponentModule } from './components/detail-age/detail-age.component-module';
import { DetailsProductComponentModule } from './components/details-product/details-product.component-module';
import { DetailsCartComponentModule } from './components/details-cart/details-cart.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cat-fact', component: DetailsCatFactsComponent }, { path: 'age/:name', component: DetailAgeComponent }, { path: 'product/:id', component: DetailsProductComponent }, { path: 'cart/:id', component: DetailsCartComponent }]), DetailsCatFactsComponentModule, DetailAgeComponentModule, DetailsProductComponentModule, DetailsCartComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
