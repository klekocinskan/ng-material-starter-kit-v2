import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditProductWithCategoryComponent } from './edit-product-with-category.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatSelectModule, MatOptionModule],
  declarations: [EditProductWithCategoryComponent],
  providers: [],
  exports: [EditProductWithCategoryComponent]
})
export class EditProductWithCategoryComponentModule {
}
