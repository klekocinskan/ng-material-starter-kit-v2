import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DetailsCatFactsComponent } from './details-cat-facts.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [DetailsCatFactsComponent],
  providers: [],
  exports: [DetailsCatFactsComponent]
})
export class DetailsCatFactsComponentModule {
}
