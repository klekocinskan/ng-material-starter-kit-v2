import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectVoidInmemoryRandomNumberComponent } from './components/subject-void-inmemory-random-number/subject-void-inmemory-random-number.component';
import { SubjectVoidInMemoryRandomNamesComponent } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component';
import { SubjecVoidExternalUsersComponent } from './components/subjec-void-external-users/subjec-void-external-users.component';
import { VoidExternalRandomCatFactsComponent } from './components/void-external-random-cat-facts/void-external-random-cat-facts.component';
import { SubjectVoidExternalDeleteCountryComponent } from './components/subject-void-external-delete-country/subject-void-external-delete-country.component';
import { SubjectVoidDeleteProductComponent } from './components/subject-void-delete-product/subject-void-delete-product.component';
import { SubjectStringInMemoryProductComponent } from './components/subject-string-in-memory-product/subject-string-in-memory-product.component';
import { ModelInMemoryCryptoComponent } from './components/model-in-memory-crypto/model-in-memory-crypto.component';
import { SubjectModelInMemoryUserComponent } from './components/subject-model-in-memory-user/subject-model-in-memory-user.component';
import { StringExternalSnackbarProductComponent } from './components/string-external-snackbar-product/string-external-snackbar-product.component';
import { SubjectStringExternalProductAndCategoryComponent } from './components/subject-string-external-product-and-category/subject-string-external-product-and-category.component';
import { SubjectStringExternalJobComponent } from './components/subject-string-external-job/subject-string-external-job.component';
import { SubjectVoidInmemoryRandomNumberComponentModule } from './components/subject-void-inmemory-random-number/subject-void-inmemory-random-number.component-module';
import { SubjectVoidInMemoryRandomNamesComponentModule } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component-module';
import { SubjecVoidExternalUsersComponentModule } from './components/subjec-void-external-users/subjec-void-external-users.component-module';
import { VoidExternalRandomCatFactsComponentModule } from './components/void-external-random-cat-facts/void-external-random-cat-facts.component-module';
import { SubjectVoidExternalDeleteCountryComponentModule } from './components/subject-void-external-delete-country/subject-void-external-delete-country.component-module';
import { SubjectVoidDeleteProductComponentModule } from './components/subject-void-delete-product/subject-void-delete-product.component-module';
import { SubjectStringInMemoryProductComponentModule } from './components/subject-string-in-memory-product/subject-string-in-memory-product.component-module';
import { ModelInMemoryCryptoComponentModule } from './components/model-in-memory-crypto/model-in-memory-crypto.component-module';
import { SubjectModelInMemoryUserComponentModule } from './components/subject-model-in-memory-user/subject-model-in-memory-user.component-module';
import { StringExternalSnackbarProductComponentModule } from './components/string-external-snackbar-product/string-external-snackbar-product.component-module';
import { SubjectStringExternalProductAndCategoryComponentModule } from './components/subject-string-external-product-and-category/subject-string-external-product-and-category.component-module';
import { SubjectStringExternalJobComponentModule } from './components/subject-string-external-job/subject-string-external-job.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'subject-void-in-memory-random-number', component: SubjectVoidInmemoryRandomNumberComponent }, { path: 'subject-void-in-memory-names', component: SubjectVoidInMemoryRandomNamesComponent }, { path: 'subject-void-refresh', component: SubjecVoidExternalUsersComponent }, { path: 'subject-void-random-cat-fact', component: VoidExternalRandomCatFactsComponent }, { path: 'subject-void-external-delete-country', component: SubjectVoidExternalDeleteCountryComponent }, { path: 'subject-void-delete-product', component: SubjectVoidDeleteProductComponent }, { path: 'products', component: SubjectStringInMemoryProductComponent }, { path: 'crypto-master-details', component: ModelInMemoryCryptoComponent }, { path: 'subject-model-master-detail-user', component: SubjectModelInMemoryUserComponent }, { path: 'subject-string-external-product-availability', component: StringExternalSnackbarProductComponent }, { path: 'list-2-subject-master-details-get-all', component: SubjectStringExternalProductAndCategoryComponent }, { path: 'undefined', component: SubjectStringExternalProductAndCategoryComponent }, { path: 'list-2-subject-master-details-get-one-different-model', component: SubjectStringExternalJobComponent }]), SubjectVoidInmemoryRandomNumberComponentModule, SubjectVoidInMemoryRandomNamesComponentModule, SubjecVoidExternalUsersComponentModule, VoidExternalRandomCatFactsComponentModule, SubjectVoidExternalDeleteCountryComponentModule, SubjectVoidDeleteProductComponentModule, SubjectStringInMemoryProductComponentModule, ModelInMemoryCryptoComponentModule, SubjectModelInMemoryUserComponentModule, StringExternalSnackbarProductComponentModule, SubjectStringExternalProductAndCategoryComponentModule, SubjectStringExternalJobComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
