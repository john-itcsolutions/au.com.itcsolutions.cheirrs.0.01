import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchproptxlettingPage } from './searchproptxletting.page';

const routes: Routes = [
  {
    path: '',
    component: SearchproptxlettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchproptxlettingPage]
})
export class SearchproptxlettingPageModule {}
