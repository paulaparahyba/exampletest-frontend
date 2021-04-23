import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonReadComponent } from './person/person-read/person-read.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'personPhone', component: PersonComponent },
  { path: 'personPhone/create', component: PersonReadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
