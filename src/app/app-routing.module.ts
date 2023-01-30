import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsCatFactsComponent } from './components/details-cat-facts/details-cat-facts.component';
import { DetailAgeComponent } from './components/detail-age/detail-age.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { DetailsCatFactsComponentModule } from './components/details-cat-facts/details-cat-facts.component-module';
import { DetailAgeComponentModule } from './components/detail-age/detail-age.component-module';
import { DetailsProductComponentModule } from './components/details-product/details-product.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cat-fact', component: DetailsCatFactsComponent }, { path: 'age/:name', component: DetailAgeComponent }, { path: 'product/:id', component: DetailsProductComponent }]), DetailsCatFactsComponentModule, DetailAgeComponentModule, DetailsProductComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
