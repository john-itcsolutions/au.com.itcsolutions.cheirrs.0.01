import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportstrategicplanPage } from './reportstrategicplan.page';

const routes: Routes = [
  {
    path: '',
    component: ReportstrategicplanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportstrategicplanPage]
})
export class ReportstrategicplanPageModule {}
