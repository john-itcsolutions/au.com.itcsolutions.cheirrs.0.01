import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthoritytoaccountPage } from './authoritytoaccount.page';

const routes: Routes = [
  {
    path: '',
    component: AuthoritytoaccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthoritytoaccountPage]
})
export class AuthoritytoaccountPageModule {}
