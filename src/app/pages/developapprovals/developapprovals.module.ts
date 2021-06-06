import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DevelopapprovalsPage } from './developapprovals.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopapprovalsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevelopapprovalsPage]
})
export class DevelopapprovalsPageModule {}
