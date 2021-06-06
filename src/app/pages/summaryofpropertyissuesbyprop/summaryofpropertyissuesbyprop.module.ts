import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SummaryofpropertyissuesbypropPage } from './summaryofpropertyissuesbyprop.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryofpropertyissuesbypropPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SummaryofpropertyissuesbypropPage]
})
export class SummaryofpropertyissuesbypropPageModule {}
