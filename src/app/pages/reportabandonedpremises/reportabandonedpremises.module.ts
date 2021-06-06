import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportabandonedpremisesPage } from './reportabandonedpremises.page';

const routes: Routes = [
  {
    path: '',
    component: ReportabandonedpremisesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportabandonedpremisesPage]
})
export class ReportabandonedpremisesPageModule {}
