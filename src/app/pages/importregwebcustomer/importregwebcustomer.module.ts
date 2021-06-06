import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImportregwebcustomerPage } from './importregwebcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: ImportregwebcustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImportregwebcustomerPage]
})
export class ImportregwebcustomerPageModule {}
