import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncListComponent } from './components/func-list/func-list.component';
import { FuncFormComponent } from './components/func-form/func-form.component';

const routes: Routes = [
  { path: '',    redirectTo: 'funcionarios',    pathMatch: 'full'  },
  { path: 'funcionarios', component: FuncListComponent },
  { path: 'cadastrar', component: FuncFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
