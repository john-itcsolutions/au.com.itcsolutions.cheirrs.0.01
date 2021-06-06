import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExternalfinancialauditsPage } from './externalfinancialaudits.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalfinancialauditsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExternalfinancialauditsPage]
})
export class ExternalfinancialauditsPageModule {}
