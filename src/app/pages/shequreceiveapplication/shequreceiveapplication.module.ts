import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShequreceiveapplicationPage } from './shequreceiveapplication.page';

const routes: Routes = [
  {
    path: '',
    component: ShequreceiveapplicationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShequreceiveapplicationPage]
})
export class ShequreceiveapplicationPageModule {}
