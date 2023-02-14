import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortingSingleUserComponent } from './sorting-single-user.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [SortingSingleUserComponent],
  providers: [],
  exports: [SortingSingleUserComponent]
})
export class SortingSingleUserComponentModule {
}
