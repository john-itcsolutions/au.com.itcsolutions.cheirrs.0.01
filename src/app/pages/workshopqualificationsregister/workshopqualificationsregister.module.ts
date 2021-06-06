import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopqualificationsregisterPage } from './workshopqualificationsregister.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopqualificationsregisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopqualificationsregisterPage]
})
export class WorkshopqualificationsregisterPageModule {}
