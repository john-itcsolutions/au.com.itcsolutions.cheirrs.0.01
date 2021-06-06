import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportpropcareissuesPage } from './reportpropcareissues.page';

const routes: Routes = [
  {
    path: '',
    component: ReportpropcareissuesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportpropcareissuesPage]
})
export class ReportpropcareissuesPageModule {}
