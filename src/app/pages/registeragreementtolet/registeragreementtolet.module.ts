import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisteragreementtoletPage } from './registeragreementtolet.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteragreementtoletPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisteragreementtoletPage]
})
export class RegisteragreementtoletPageModule {}
