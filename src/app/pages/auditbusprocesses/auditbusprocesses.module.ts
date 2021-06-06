import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditbusprocessesPage } from './auditbusprocesses.page';

const routes: Routes = [
  {
    path: '',
    component: AuditbusprocessesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuditbusprocessesPage]
})
export class AuditbusprocessesPageModule {}
