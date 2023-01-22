import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjecVoidExternalUsersComponent } from './subjec-void-external-users.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  declarations: [SubjecVoidExternalUsersComponent],
  providers: [],
  exports: [SubjecVoidExternalUsersComponent]
})
export class SubjecVoidExternalUsersComponentModule {
}
