import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SubjectStringExternalProductAndCategoryComponent } from './subject-string-external-product-and-category.component';

@NgModule({
  imports: [MatTableModule, CommonModule, MatCardModule],
  declarations: [SubjectStringExternalProductAndCategoryComponent],
  providers: [],
  exports: [SubjectStringExternalProductAndCategoryComponent]
})
export class SubjectStringExternalProductAndCategoryComponentModule {
}
