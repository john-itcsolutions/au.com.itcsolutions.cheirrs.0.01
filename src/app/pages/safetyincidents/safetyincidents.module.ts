import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SafetyincidentsPage } from './safetyincidents.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyincidentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SafetyincidentsPage]
})
export class SafetyincidentsPageModule {}
