import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
  path:'dashboard', component:DashboardComponent
  },
  {path:'userpro', component:UserprofileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }