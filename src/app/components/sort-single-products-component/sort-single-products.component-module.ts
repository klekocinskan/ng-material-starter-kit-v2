import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { SortSingleComponent } from './sort-single-products.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatOptionModule, MatListModule],
  declarations: [SortSingleComponent],
  providers: [],
  exports: [SortSingleComponent]
})
export class SortSingleComponentModule {
}
