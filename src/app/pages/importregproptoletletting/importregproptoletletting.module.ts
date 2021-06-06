import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImportregproptoletlettingPage } from './importregproptoletletting.page';

const routes: Routes = [
  {
    path: '',
    component: ImportregproptoletlettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImportregproptoletlettingPage]
})
export class ImportregproptoletlettingPageModule {}
