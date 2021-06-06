import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportbusinessplanPage } from './reportbusinessplan.page';

const routes: Routes = [
  {
    path: '',
    component: ReportbusinessplanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportbusinessplanPage]
})
export class ReportbusinessplanPageModule {}
