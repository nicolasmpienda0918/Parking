import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { CellRoutingModule } from './cell-routing.module';
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { CellsComponent } from './pages/cells/cells.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

import { ClientsComponent } from './pages/clients/clients.component';
import { EditComponent } from './pages/edit/edit.component';







@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    CellsComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MatToolbarModule,
   CellRoutingModule
  ]
})
export class CellsModule { }
