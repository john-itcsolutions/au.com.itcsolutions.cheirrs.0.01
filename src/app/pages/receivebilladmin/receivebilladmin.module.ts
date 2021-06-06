import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceivebilladminPage } from './receivebilladmin.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivebilladminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceivebilladminPage]
})
export class ReceivebilladminPageModule {}
