import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefinanceshequmtgePage } from './refinanceshequmtge.page';

const routes: Routes = [
  {
    path: '',
    component: RefinanceshequmtgePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RefinanceshequmtgePage]
})
export class RefinanceshequmtgePageModule {}
