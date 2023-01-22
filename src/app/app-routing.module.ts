import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectVoidInmemoryRandomNumberComponent } from './components/subject-void-inmemory-random-number/subject-void-inmemory-random-number.component';
import { SubjectVoidInMemoryRandomNamesComponent } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component';
import { SubjecVoidExternalUsersComponent } from './components/subjec-void-external-users/subjec-void-external-users.component';
import { SubjectVoidInmemoryRandomNumberComponentModule } from './components/subject-void-inmemory-random-number/subject-void-inmemory-random-number.component-module';
import { SubjectVoidInMemoryRandomNamesComponentModule } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component-module';
import { SubjecVoidExternalUsersComponentModule } from './components/subjec-void-external-users/subjec-void-external-users.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'subject-void-in-memory-random-number', component: SubjectVoidInmemoryRandomNumberComponent }, { path: 'subject-void-in-memory-names', component: SubjectVoidInMemoryRandomNamesComponent }, { path: 'subject-void-refresh', component: SubjecVoidExternalUsersComponent }]), SubjectVoidInmemoryRandomNumberComponentModule, SubjectVoidInMemoryRandomNamesComponentModule, SubjecVoidExternalUsersComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
