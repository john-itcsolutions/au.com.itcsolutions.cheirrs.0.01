import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchpropslettingPage } from './searchpropsletting.page';

const routes: Routes = [
  {
    path: '',
    component: SearchpropslettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchpropslettingPage]
})
export class SearchpropslettingPageModule {}
