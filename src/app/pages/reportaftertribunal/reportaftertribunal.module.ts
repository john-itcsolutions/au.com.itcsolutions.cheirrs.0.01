import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportaftertribunalPage } from './reportaftertribunal.page';

const routes: Routes = [
  {
    path: '',
    component: ReportaftertribunalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportaftertribunalPage]
})
export class ReportaftertribunalPageModule {}
