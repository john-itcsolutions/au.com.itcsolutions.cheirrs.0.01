import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RedevelopapprovalsPage } from './redevelopapprovals.page';

const routes: Routes = [
  {
    path: '',
    component: RedevelopapprovalsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RedevelopapprovalsPage]
})
export class RedevelopapprovalsPageModule {}
