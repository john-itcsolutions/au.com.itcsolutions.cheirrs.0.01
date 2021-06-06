import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TenantsledgerPage } from './tenantsledger.page';

const routes: Routes = [
  {
    path: '',
    component: TenantsledgerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TenantsledgerPage]
})
export class TenantsledgerPageModule {}
