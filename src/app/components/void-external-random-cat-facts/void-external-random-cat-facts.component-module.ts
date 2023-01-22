import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VoidExternalRandomCatFactsComponent } from './void-external-random-cat-facts.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  declarations: [VoidExternalRandomCatFactsComponent],
  providers: [],
  exports: [VoidExternalRandomCatFactsComponent]
})
export class VoidExternalRandomCatFactsComponentModule {
}
