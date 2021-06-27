import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShequmakeoffertoapplicantPage } from './shequmakeoffertoapplicant.page';

const routes: Routes = [
  {
    path: '',
    component: ShequmakeoffertoapplicantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShequmakeoffertoapplicantPage]
})
export class ShequmakeoffertoapplicantPageModule {}
