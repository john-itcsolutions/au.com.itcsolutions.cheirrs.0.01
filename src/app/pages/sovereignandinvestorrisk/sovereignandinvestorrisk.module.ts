import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SovereignandinvestorriskPage } from './sovereignandinvestorrisk.page';

const routes: Routes = [
  {
    path: '',
    component: SovereignandinvestorriskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SovereignandinvestorriskPage]
})
export class SovereignandinvestorriskPageModule {}
