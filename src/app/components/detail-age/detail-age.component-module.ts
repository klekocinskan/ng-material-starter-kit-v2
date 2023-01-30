import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailAgeComponent } from './detail-age.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [DetailAgeComponent],
  providers: [],
  exports: [DetailAgeComponent]
})
export class DetailAgeComponentModule {
}
