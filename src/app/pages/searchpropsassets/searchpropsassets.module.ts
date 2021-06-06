import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchpropsassetsPage } from './searchpropsassets.page';

const routes: Routes = [
  {
    path: '',
    component: SearchpropsassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchpropsassetsPage]
})
export class SearchpropsassetsPageModule {}
