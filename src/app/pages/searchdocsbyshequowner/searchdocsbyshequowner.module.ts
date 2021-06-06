import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdocsbyshequownerPage } from './searchdocsbyshequowner.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocsbyshequownerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdocsbyshequownerPage]
})
export class SearchdocsbyshequownerPageModule {}
