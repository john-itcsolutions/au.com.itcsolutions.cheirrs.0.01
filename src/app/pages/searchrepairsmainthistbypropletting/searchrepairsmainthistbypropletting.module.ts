import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchrepairsmainthistbyproplettingPage } from './searchrepairsmainthistbypropletting.page';

const routes: Routes = [
  {
    path: '',
    component: SearchrepairsmainthistbyproplettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchrepairsmainthistbyproplettingPage]
})
export class SearchrepairsmainthistbyproplettingPageModule {}
