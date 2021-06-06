import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchownersllordsPage } from './searchownersllords.page';

const routes: Routes = [
  {
    path: '',
    component: SearchownersllordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchownersllordsPage]
})
export class SearchownersllordsPageModule {}
