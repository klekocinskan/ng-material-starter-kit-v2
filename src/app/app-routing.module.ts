import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectVoidInmemoryRandomNumberComponent } from './components/subject-void-inmemory-random-number/subject-void-inmemory-random-number.component';
import { SubjectVoidInmemoryRandomNumberComponentModule } from './components/subject-void-inmemory-random-number/subject-void-inmemory-random-number.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'subject-void-in-memory-random-number', component: SubjectVoidInmemoryRandomNumberComponent }]), SubjectVoidInmemoryRandomNumberComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
