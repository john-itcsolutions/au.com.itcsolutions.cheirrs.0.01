import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopteamboardsPage } from './workshopteamboards.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopteamboardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopteamboardsPage]
})
export class WorkshopteamboardsPageModule {}
