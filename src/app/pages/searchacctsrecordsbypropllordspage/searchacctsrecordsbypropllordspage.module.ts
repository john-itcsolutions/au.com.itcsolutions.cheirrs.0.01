import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchacctsrecordsbypropllordspagePage } from './searchacctsrecordsbypropllordspage.page';

const routes: Routes = [
  {
    path: '',
    component: SearchacctsrecordsbypropllordspagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchacctsrecordsbypropllordspagePage]
})
export class SearchacctsrecordsbypropllordspagePageModule {}
