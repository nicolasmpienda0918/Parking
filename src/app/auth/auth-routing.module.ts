import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [

{
  path: '',
  component: MainComponent,
  children: [
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'registry',
      component: RegistryComponent
    },
    {
      path:'**',
      redirectTo:'login'
    },
    
  ]
}

]

@NgModule({
 
  imports: [
    RouterModule.forChild( routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
