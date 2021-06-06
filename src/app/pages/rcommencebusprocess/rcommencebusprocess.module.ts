import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RcommencebusprocessPage } from './rcommencebusprocess.page';

const routes: Routes = [
  {
    path: '',
    component: RcommencebusprocessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RcommencebusprocessPage]
})
export class RcommencebusprocessPageModule {}
