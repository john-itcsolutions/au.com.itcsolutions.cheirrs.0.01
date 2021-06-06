import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvsignagecrmPage } from './advsignagecrm.page';

const routes: Routes = [
  {
    path: '',
    component: AdvsignagecrmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvsignagecrmPage]
})
export class AdvsignagecrmPageModule {}
