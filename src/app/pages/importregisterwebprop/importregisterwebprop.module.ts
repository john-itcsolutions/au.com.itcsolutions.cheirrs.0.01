import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImportregisterwebpropPage } from './importregisterwebprop.page';

const routes: Routes = [
  {
    path: '',
    component: ImportregisterwebpropPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImportregisterwebpropPage]
})
export class ImportregisterwebpropPageModule {}
