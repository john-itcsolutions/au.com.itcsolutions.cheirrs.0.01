import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportneighbourpolicecomplaintPage } from './reportneighbourpolicecomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: ReportneighbourpolicecomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportneighbourpolicecomplaintPage]
})
export class ReportneighbourpolicecomplaintPageModule {}
