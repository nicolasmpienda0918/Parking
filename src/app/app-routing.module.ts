import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [


 {
   path: 'cells',
   loadChildren: () => import( './cells/cells.module').then(m => m.CellsModule)
 },

 
 {
  path:'auth',
  loadChildren: () => import( './auth/auth.module').then(m => m.AuthModule)
},

{
  path:'dashboard',
  loadChildren: () => import( './protected/protected.module').then(m => m.ProtectedModule)
},

  {
    path: '**',
    //component:ErrorPageComponent
    redirectTo: 'auth'
  },

  {
    path: '404',
    component:ErrorPageComponent

  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
