import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailsCartComponent } from './details-cart.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [DetailsCartComponent],
  providers: [],
  exports: [DetailsCartComponent]
})
export class DetailsCartComponentModule {
}
