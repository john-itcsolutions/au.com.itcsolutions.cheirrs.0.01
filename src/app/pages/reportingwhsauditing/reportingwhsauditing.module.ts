import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportingwhsauditingPage } from './reportingwhsauditing.page';

const routes: Routes = [
  {
    path: '',
    component: ReportingwhsauditingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportingwhsauditingPage]
})
export class ReportingwhsauditingPageModule {}
