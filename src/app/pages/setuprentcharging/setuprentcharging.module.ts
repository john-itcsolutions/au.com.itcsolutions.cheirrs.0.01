import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetuprentchargingPage } from './setuprentcharging.page';

const routes: Routes = [
  {
    path: '',
    component: SetuprentchargingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetuprentchargingPage]
})
export class SetuprentchargingPageModule {}
