import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RenegotiatearrearsagreementPage } from './renegotiatearrearsagreement.page';

const routes: Routes = [
  {
    path: '',
    component: RenegotiatearrearsagreementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RenegotiatearrearsagreementPage]
})
export class RenegotiatearrearsagreementPageModule {}
