import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchtenantsbyproptenmngmntPage } from './searchtenantsbyproptenmngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: SearchtenantsbyproptenmngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchtenantsbyproptenmngmntPage]
})
export class SearchtenantsbyproptenmngmntPageModule {}
