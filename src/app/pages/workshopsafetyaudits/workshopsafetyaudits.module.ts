import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopsafetyauditsPage } from './workshopsafetyaudits.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsafetyauditsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopsafetyauditsPage]
})
export class WorkshopsafetyauditsPageModule {}
