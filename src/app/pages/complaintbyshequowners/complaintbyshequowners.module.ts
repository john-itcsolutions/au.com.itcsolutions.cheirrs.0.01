import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComplaintbyshequownersPage } from './complaintbyshequowners.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintbyshequownersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComplaintbyshequownersPage]
})
export class ComplaintbyshequownersPageModule {}
