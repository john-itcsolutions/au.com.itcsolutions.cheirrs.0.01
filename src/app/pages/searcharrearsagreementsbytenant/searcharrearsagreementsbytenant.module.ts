import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearcharrearsagreementsbytenantPage } from './searcharrearsagreementsbytenant.page';

const routes: Routes = [
  {
    path: '',
    component: SearcharrearsagreementsbytenantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearcharrearsagreementsbytenantPage]
})
export class SearcharrearsagreementsbytenantPageModule {}
