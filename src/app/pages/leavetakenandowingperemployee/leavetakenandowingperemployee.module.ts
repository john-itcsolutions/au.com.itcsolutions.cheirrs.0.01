import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeavetakenandowingperemployeePage } from './leavetakenandowingperemployee.page';

const routes: Routes = [
  {
    path: '',
    component: LeavetakenandowingperemployeePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeavetakenandowingperemployeePage]
})
export class LeavetakenandowingperemployeePageModule {}
