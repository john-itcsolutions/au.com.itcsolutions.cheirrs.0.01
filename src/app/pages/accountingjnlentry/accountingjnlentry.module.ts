import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountingjnlentryPage } from './accountingjnlentry.page';

const routes: Routes = [
  {
    path: '',
    component: AccountingjnlentryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountingjnlentryPage]
})
export class AccountingjnlentryPageModule {}
