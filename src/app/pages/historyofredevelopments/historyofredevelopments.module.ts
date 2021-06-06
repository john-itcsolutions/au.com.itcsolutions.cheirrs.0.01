import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryofredevelopmentsPage } from './historyofredevelopments.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryofredevelopmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoryofredevelopmentsPage]
})
export class HistoryofredevelopmentsPageModule {}
