import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OverduechargesinvoicessentPage } from './overduechargesinvoicessent.page';

const routes: Routes = [
  {
    path: '',
    component: OverduechargesinvoicessentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OverduechargesinvoicessentPage]
})
export class OverduechargesinvoicessentPageModule {}
