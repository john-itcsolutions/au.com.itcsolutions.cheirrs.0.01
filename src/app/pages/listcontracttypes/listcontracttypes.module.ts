import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListcontracttypesPage } from './listcontracttypes.page';

const routes: Routes = [
  {
    path: '',
    component: ListcontracttypesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListcontracttypesPage]
})
export class ListcontracttypesPageModule {}
