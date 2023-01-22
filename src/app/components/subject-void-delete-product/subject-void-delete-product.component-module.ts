import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SubjectVoidDeleteProductComponent } from './subject-void-delete-product.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule],
  declarations: [SubjectVoidDeleteProductComponent],
  providers: [],
  exports: [SubjectVoidDeleteProductComponent]
})
export class SubjectVoidDeleteProductComponentModule {
}
