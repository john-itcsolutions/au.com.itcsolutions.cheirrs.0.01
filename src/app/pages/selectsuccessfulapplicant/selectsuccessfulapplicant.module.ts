import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectsuccessfulapplicantPage } from './selectsuccessfulapplicant.page';

const routes: Routes = [
  {
    path: '',
    component: SelectsuccessfulapplicantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectsuccessfulapplicantPage]
})
export class SelectsuccessfulapplicantPageModule {}
