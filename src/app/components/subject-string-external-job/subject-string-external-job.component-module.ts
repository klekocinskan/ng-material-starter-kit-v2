import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { SubjectStringExternalJobComponent } from './subject-string-external-job.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule],
  declarations: [SubjectStringExternalJobComponent],
  providers: [],
  exports: [SubjectStringExternalJobComponent]
})
export class SubjectStringExternalJobComponentModule {
}
