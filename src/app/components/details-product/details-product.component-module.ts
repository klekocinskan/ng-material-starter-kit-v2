import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailsProductComponent } from './details-product.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [DetailsProductComponent],
  providers: [],
  exports: [DetailsProductComponent]
})
export class DetailsProductComponentModule {
}
