import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TenancymngmntPage } from './tenancymngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: TenancymngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TenancymngmntPage]
})
export class TenancymngmntPageModule {}
