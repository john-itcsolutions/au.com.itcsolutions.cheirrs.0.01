import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchtenantsbypropassetsPage } from './searchtenantsbypropassets.page';

const routes: Routes = [
  {
    path: '',
    component: SearchtenantsbypropassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchtenantsbypropassetsPage]
})
export class SearchtenantsbypropassetsPageModule {}
