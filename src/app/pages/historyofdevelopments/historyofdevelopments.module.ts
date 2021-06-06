import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryofdevelopmentsPage } from './historyofdevelopments.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryofdevelopmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoryofdevelopmentsPage]
})
export class HistoryofdevelopmentsPageModule {}
