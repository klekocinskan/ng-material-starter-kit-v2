import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SortMultiJobsComponent } from './sort-multi-jobs.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatOptionModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [SortMultiJobsComponent],
  providers: [],
  exports: [SortMultiJobsComponent]
})
export class SortMultiJobsComponentModule {
}
