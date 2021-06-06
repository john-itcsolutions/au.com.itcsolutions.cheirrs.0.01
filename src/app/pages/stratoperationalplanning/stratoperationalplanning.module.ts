import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StratoperationalplanningPage } from './stratoperationalplanning.page';

const routes: Routes = [
  {
    path: '',
    component: StratoperationalplanningPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StratoperationalplanningPage]
})
export class StratoperationalplanningPageModule {}
