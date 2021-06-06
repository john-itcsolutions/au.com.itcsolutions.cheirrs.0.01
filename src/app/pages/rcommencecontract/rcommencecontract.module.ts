import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RcommencecontractPage } from './rcommencecontract.page';

const routes: Routes = [
  {
    path: '',
    component: RcommencecontractPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RcommencecontractPage]
})
export class RcommencecontractPageModule {}
