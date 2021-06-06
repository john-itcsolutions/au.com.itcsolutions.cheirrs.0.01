import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportoperationalplanPage } from './reportoperationalplan.page';

const routes: Routes = [
  {
    path: '',
    component: ReportoperationalplanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportoperationalplanPage]
})
export class ReportoperationalplanPageModule {}
