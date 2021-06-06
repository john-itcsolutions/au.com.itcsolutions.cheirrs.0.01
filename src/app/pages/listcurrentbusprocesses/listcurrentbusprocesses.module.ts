import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListcurrentbusprocessesPage } from './listcurrentbusprocesses.page';

const routes: Routes = [
  {
    path: '',
    component: ListcurrentbusprocessesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListcurrentbusprocessesPage]
})
export class ListcurrentbusprocessesPageModule {}
