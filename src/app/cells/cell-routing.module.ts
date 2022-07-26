import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { CellsComponent } from './pages/cells/cells.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { EditComponent } from './pages/edit/edit.component';
import { ClientsComponent } from './pages/clients/clients.component';

const routes: Routes = [

  {
    path: '',
      component: HomeComponent,
     children: [
      {path: 'add',
       component: AddComponent    
      },

      {path: 'cells', 
      component: CellsComponent
      },

      {path: 'list',
       component: ListComponent
      },

      {path: 'search',
       component: SearchComponent
      },
      {path: 'edit',
      component: EditComponent
     },
    
     {path: 'clients',
    component: ClientsComponent
     },

      {path: '**',
       redirectTo: 'home'
      }
     
     ]
  }

];

@NgModule({

  imports: [
    RouterModule.forChild( routes)  
  ],
  exports: [
    RouterModule
  ]
})
export class CellRoutingModule { }
