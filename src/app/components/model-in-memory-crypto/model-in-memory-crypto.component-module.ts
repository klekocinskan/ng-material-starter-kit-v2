import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { ModelInMemoryCryptoComponent } from './model-in-memory-crypto.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatListModule, MatGridListModule, CommonModule],
  declarations: [ModelInMemoryCryptoComponent],
  providers: [],
  exports: [ModelInMemoryCryptoComponent]
})
export class ModelInMemoryCryptoComponentModule {
}
