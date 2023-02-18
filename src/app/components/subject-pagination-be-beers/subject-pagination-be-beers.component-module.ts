import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { SubjectPaginationBeBeersComponent } from './subject-pagination-be-beers.component';

@NgModule({
  imports: [MatPaginatorModule, MatListModule, CommonModule],
  declarations: [SubjectPaginationBeBeersComponent],
  providers: [],
  exports: [SubjectPaginationBeBeersComponent]
})
export class SubjectPaginationBeBeersComponentModule {
}
