import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlankComponent } from './blank/blank.component';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      { path: '', component: BlankComponent },
      { path: 'blank', component: BlankComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
