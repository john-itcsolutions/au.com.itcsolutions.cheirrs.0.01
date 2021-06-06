import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListbusprocesstypesPage } from './listbusprocesstypes.page';

const routes: Routes = [
  {
    path: '',
    component: ListbusprocesstypesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListbusprocesstypesPage]
})
export class ListbusprocesstypesPageModule {}
