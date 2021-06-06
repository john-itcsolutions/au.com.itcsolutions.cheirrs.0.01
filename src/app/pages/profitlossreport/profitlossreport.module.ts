import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfitlossreportPage } from './profitlossreport.page';

const routes: Routes = [
  {
    path: '',
    component: ProfitlossreportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfitlossreportPage]
})
export class ProfitlossreportPageModule {}
