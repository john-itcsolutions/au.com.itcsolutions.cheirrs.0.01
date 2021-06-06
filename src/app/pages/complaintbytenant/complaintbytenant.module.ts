import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComplaintbytenantPage } from './complaintbytenant.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintbytenantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComplaintbytenantPage]
})
export class ComplaintbytenantPageModule {}
