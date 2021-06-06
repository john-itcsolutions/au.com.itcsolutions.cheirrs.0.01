import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdevelopteamboardsPage } from './rdevelopteamboards.page';

const routes: Routes = [
  {
    path: '',
    component: RdevelopteamboardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdevelopteamboardsPage]
})
export class RdevelopteamboardsPageModule {}
