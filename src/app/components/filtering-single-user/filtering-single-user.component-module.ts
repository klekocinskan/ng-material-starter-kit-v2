import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteringSingleUserComponent } from './filtering-single-user.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [FilteringSingleUserComponent],
  providers: [],
  exports: [FilteringSingleUserComponent]
})
export class FilteringSingleUserComponentModule {
}
