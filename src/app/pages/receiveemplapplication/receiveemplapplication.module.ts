import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceiveemplapplicationPage } from './receiveemplapplication.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiveemplapplicationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceiveemplapplicationPage]
})
export class ReceiveemplapplicationPageModule {}
