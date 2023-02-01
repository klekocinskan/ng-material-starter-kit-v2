import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditJobsFormComponent } from './edit-jobs-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCheckboxModule],
  declarations: [EditJobsFormComponent],
  providers: [],
  exports: [EditJobsFormComponent]
})
export class EditJobsFormComponentModule {
}
