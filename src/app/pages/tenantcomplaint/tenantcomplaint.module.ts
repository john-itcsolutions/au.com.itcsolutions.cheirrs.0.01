import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TenantcomplaintPage } from './tenantcomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: TenantcomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TenantcomplaintPage]
})
export class TenantcomplaintPageModule {}
