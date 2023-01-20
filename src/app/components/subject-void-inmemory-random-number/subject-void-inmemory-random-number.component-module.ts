import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectVoidInmemoryRandomNumberComponent } from './subject-void-inmemory-random-number.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [SubjectVoidInmemoryRandomNumberComponent],
  providers: [],
  exports: [SubjectVoidInmemoryRandomNumberComponent]
})
export class SubjectVoidInmemoryRandomNumberComponentModule {
}
