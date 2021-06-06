import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchextenantsofproplettingPage } from './searchextenantsofpropletting.page';

const routes: Routes = [
  {
    path: '',
    component: SearchextenantsofproplettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchextenantsofproplettingPage]
})
export class SearchextenantsofproplettingPageModule {}
