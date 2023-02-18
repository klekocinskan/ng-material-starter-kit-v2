import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SortingFieldCryptoComponent } from './sorting-field-crypto.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule],
  declarations: [SortingFieldCryptoComponent],
  providers: [],
  exports: [SortingFieldCryptoComponent]
})
export class SortingFieldCryptoComponentModule {
}
