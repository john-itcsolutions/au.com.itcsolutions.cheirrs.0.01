import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshoppurchordersPage } from './workshoppurchorders.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshoppurchordersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshoppurchordersPage]
})
export class WorkshoppurchordersPageModule {}
