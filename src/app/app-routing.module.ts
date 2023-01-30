import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsCatFactsComponent } from './components/details-cat-facts/details-cat-facts.component';
import { DetailsCatFactsComponentModule } from './components/details-cat-facts/details-cat-facts.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cat-fact', component: DetailsCatFactsComponent }]), DetailsCatFactsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
