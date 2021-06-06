import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshoppurchreqPage } from './workshoppurchreq.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshoppurchreqPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshoppurchreqPage]
})
export class WorkshoppurchreqPageModule {}
