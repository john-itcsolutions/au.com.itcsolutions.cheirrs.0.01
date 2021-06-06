import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArrearsagreementsbytenantPage } from './arrearsagreementsbytenant.page';

const routes: Routes = [
  {
    path: '',
    component: ArrearsagreementsbytenantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArrearsagreementsbytenantPage]
})
export class ArrearsagreementsbytenantPageModule {}
