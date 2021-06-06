import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterotheragreementPage } from './registerotheragreement.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterotheragreementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterotheragreementPage]
})
export class RegisterotheragreementPageModule {}
