import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { SearchMultiJobsComponent } from './search-multi-jobs.component';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, RouterLinkWithHref, RouterLink, MatTabsModule, MatTableModule],
  declarations: [SearchMultiJobsComponent],
  providers: [],
  exports: [SearchMultiJobsComponent]
})
export class SearchMultiJobsComponentModule {
}
