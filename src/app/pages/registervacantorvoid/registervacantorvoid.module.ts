import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistervacantorvoidPage } from './registervacantorvoid.page';

const routes: Routes = [
  {
    path: '',
    component: RegistervacantorvoidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistervacantorvoidPage]
})
export class RegistervacantorvoidPageModule {}
