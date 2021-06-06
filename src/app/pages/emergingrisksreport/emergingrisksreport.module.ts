import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmergingrisksreportPage } from './emergingrisksreport.page';

const routes: Routes = [
  {
    path: '',
    component: EmergingrisksreportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmergingrisksreportPage]
})
export class EmergingrisksreportPageModule {}
