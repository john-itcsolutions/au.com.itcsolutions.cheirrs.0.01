import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchshequownersbynamePage } from './searchshequownersbyname.page';

const routes: Routes = [
  {
    path: '',
    component: SearchshequownersbynamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchshequownersbynamePage]
})
export class SearchshequownersbynamePageModule {}
