import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GovernmentcomplaintPage } from './governmentcomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: GovernmentcomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GovernmentcomplaintPage]
})
export class GovernmentcomplaintPageModule {}
