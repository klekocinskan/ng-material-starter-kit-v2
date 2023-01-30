import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailsUserComponent } from './details-user.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [DetailsUserComponent],
  providers: [],
  exports: [DetailsUserComponent]
})
export class DetailsUserComponentModule {
}
