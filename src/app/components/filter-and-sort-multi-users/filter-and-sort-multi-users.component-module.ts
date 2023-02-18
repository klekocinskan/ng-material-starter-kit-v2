import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilterAndSortMultiUsersComponent } from './filter-and-sort-multi-users.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [FilterAndSortMultiUsersComponent],
  providers: [],
  exports: [FilterAndSortMultiUsersComponent]
})
export class FilterAndSortMultiUsersComponentModule {
}
