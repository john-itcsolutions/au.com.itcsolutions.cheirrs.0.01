import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportceomultiflexPage } from './reportceomultiflex.page';

const routes: Routes = [
  {
    path: '',
    component: ReportceomultiflexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportceomultiflexPage]
})
export class ReportceomultiflexPageModule {}
