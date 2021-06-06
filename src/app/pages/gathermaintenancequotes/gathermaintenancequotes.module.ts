import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GathermaintenancequotesPage } from './gathermaintenancequotes.page';

const routes: Routes = [
  {
    path: '',
    component: GathermaintenancequotesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GathermaintenancequotesPage]
})
export class GathermaintenancequotesPageModule {}
