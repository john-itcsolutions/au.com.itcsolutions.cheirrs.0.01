import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportdamagebytenantPage } from './reportdamagebytenant.page';

const routes: Routes = [
  {
    path: '',
    component: ReportdamagebytenantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportdamagebytenantPage]
})
export class ReportdamagebytenantPageModule {}
