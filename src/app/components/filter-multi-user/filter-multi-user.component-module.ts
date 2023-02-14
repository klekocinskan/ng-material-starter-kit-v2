import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilterMultiUserComponent } from './filter-multi-user.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [FilterMultiUserComponent],
  providers: [],
  exports: [FilterMultiUserComponent]
})
export class FilterMultiUserComponentModule {
}
