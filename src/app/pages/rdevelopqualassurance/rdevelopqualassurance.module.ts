import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdevelopqualassurancePage } from './rdevelopqualassurance.page';

const routes: Routes = [
  {
    path: '',
    component: RdevelopqualassurancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdevelopqualassurancePage]
})
export class RdevelopqualassurancePageModule {}
