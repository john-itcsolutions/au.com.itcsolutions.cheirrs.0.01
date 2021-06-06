import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LlordmenuimportregproptoletPage } from './llordmenuimportregproptolet.page';

const routes: Routes = [
  {
    path: '',
    component: LlordmenuimportregproptoletPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LlordmenuimportregproptoletPage]
})
export class LlordmenuimportregproptoletPageModule {}
