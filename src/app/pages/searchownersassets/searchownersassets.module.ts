import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchownersassetsPage } from './searchownersassets.page';

const routes: Routes = [
  {
    path: '',
    component: SearchownersassetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchownersassetsPage]
})
export class SearchownersassetsPageModule {}
