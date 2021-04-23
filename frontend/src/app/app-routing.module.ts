import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDeleteComponent } from './person/person-delete/person-delete.component';
import { PersonReadComponent } from './person/person-read/person-read.component';
import { PersonUpdateComponent } from './person/person-update/person-update.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'personPhone', component: PersonComponent },
  { path: 'personPhone/create', component: PersonReadComponent },
  { path: 'personPhone/update/:id', component: PersonUpdateComponent },
  { path: 'personPhone/delete/:id', component: PersonDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
