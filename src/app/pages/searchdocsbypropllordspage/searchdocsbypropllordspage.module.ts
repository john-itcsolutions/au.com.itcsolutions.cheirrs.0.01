import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbypropllordspagePage } from './searchdocsbypropllordspage.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbypropllordspagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbypropllordspagePage]
})
export class SearchdocsbypropllordspagePageModule {}
