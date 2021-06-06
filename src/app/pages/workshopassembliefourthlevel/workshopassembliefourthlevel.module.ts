import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopassembliefourthlevelPage } from './workshopassembliefourthlevel.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopassembliefourthlevelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopassembliefourthlevelPage]
})
export class WorkshopassembliefourthlevelPageModule {}
