import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrategicswotanalysisPage } from './strategicswotanalysis.page';

const routes: Routes = [
  {
    path: '',
    component: StrategicswotanalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StrategicswotanalysisPage]
})
export class StrategicswotanalysisPageModule {}
