import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatasecurityanalysisPage } from './datasecurityanalysis.page';

const routes: Routes = [
  {
    path: '',
    component: DatasecurityanalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatasecurityanalysisPage]
})
export class DatasecurityanalysisPageModule {}
