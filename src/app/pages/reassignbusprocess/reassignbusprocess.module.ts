import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReassignbusprocessPage } from './reassignbusprocess.page';

const routes: Routes = [
  {
    path: '',
    component: ReassignbusprocessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReassignbusprocessPage]
})
export class ReassignbusprocessPageModule {}
