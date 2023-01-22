import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectStringInMemoryProductComponent } from './subject-string-in-memory-product.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [SubjectStringInMemoryProductComponent],
  providers: [],
  exports: [SubjectStringInMemoryProductComponent]
})
export class SubjectStringInMemoryProductComponentModule {
}
