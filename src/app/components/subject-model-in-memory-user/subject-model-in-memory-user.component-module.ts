import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectModelInMemoryUserComponent } from './subject-model-in-memory-user.component';

@NgModule({
  imports: [MatChipsModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [SubjectModelInMemoryUserComponent],
  providers: [],
  exports: [SubjectModelInMemoryUserComponent]
})
export class SubjectModelInMemoryUserComponentModule {
}
