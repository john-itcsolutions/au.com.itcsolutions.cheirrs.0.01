import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchownerscrmPage } from './searchownerscrm.page';

const routes: Routes = [
  {
    path: '',
    component: SearchownerscrmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchownerscrmPage]
})
export class SearchownerscrmPageModule {}
