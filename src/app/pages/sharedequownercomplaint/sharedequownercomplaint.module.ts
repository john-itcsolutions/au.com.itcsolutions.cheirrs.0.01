import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedequownercomplaintPage } from './sharedequownercomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: SharedequownercomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SharedequownercomplaintPage]
})
export class SharedequownercomplaintPageModule {}
