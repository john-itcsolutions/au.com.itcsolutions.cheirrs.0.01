import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportingacctspayableauditingPage } from './reportingacctspayableauditing.page';

const routes: Routes = [
  {
    path: '',
    component: ReportingacctspayableauditingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportingacctspayableauditingPage]
})
export class ReportingacctspayableauditingPageModule {}
