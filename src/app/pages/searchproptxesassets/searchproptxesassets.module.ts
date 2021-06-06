import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchproptxesassetsPage } from './searchproptxesassets.page';

const routes: Routes = [
  {
    path: '',
    component: SearchproptxesassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchproptxesassetsPage]
})
export class SearchproptxesassetsPageModule {}
