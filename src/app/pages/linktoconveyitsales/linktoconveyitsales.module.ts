import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LinktoconveyitsalesPage } from './linktoconveyitsales.page';

const routes: Routes = [
  {
    path: '',
    component: LinktoconveyitsalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinktoconveyitsalesPage]
})
export class LinktoconveyitsalesPageModule {}
