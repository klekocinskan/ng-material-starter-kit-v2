import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectVoidInmemoryRandomNumberComponent } from './components/subject-void-inmemory-random-number/subject-void-inmemory-random-number.component';
import { SubjectVoidInMemoryRandomNamesComponent } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component';
import { SubjecVoidExternalUsersComponent } from './components/subjec-void-external-users/subjec-void-external-users.component';
import { VoidExternalRandomCatFactsComponent } from './components/void-external-random-cat-facts/void-external-random-cat-facts.component';
import { SubjectVoidExternalDeleteCountryComponent } from './components/subject-void-external-delete-country/subject-void-external-delete-country.component';
import { SubjectVoidDeleteProductComponent } from './components/subject-void-delete-product/subject-void-delete-product.component';
import { SubjectStringInMemoryProductComponent } from './components/subject-string-in-memory-product/subject-string-in-memory-product.component';
import { SubjectVoidInmemoryRandomNumberComponentModule } from './components/subject-void-inmemory-random-number/subject-void-inmemory-random-number.component-module';
import { SubjectVoidInMemoryRandomNamesComponentModule } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component-module';
import { SubjecVoidExternalUsersComponentModule } from './components/subjec-void-external-users/subjec-void-external-users.component-module';
import { VoidExternalRandomCatFactsComponentModule } from './components/void-external-random-cat-facts/void-external-random-cat-facts.component-module';
import { SubjectVoidExternalDeleteCountryComponentModule } from './components/subject-void-external-delete-country/subject-void-external-delete-country.component-module';
import { SubjectVoidDeleteProductComponentModule } from './components/subject-void-delete-product/subject-void-delete-product.component-module';
import { SubjectStringInMemoryProductComponentModule } from './components/subject-string-in-memory-product/subject-string-in-memory-product.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'subject-void-in-memory-random-number', component: SubjectVoidInmemoryRandomNumberComponent }, { path: 'subject-void-in-memory-names', component: SubjectVoidInMemoryRandomNamesComponent }, { path: 'subject-void-refresh', component: SubjecVoidExternalUsersComponent }, { path: 'subject-void-random-cat-fact', component: VoidExternalRandomCatFactsComponent }, { path: 'subject-void-external-delete-country', component: SubjectVoidExternalDeleteCountryComponent }, { path: 'subject-void-delete-product', component: SubjectVoidDeleteProductComponent }, { path: 'products', component: SubjectStringInMemoryProductComponent }]), SubjectVoidInmemoryRandomNumberComponentModule, SubjectVoidInMemoryRandomNamesComponentModule, SubjecVoidExternalUsersComponentModule, VoidExternalRandomCatFactsComponentModule, SubjectVoidExternalDeleteCountryComponentModule, SubjectVoidDeleteProductComponentModule, SubjectStringInMemoryProductComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
