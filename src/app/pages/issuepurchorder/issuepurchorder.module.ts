import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IssuepurchorderPage } from './issuepurchorder.page';

const routes: Routes = [
  {
    path: '',
    component: IssuepurchorderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IssuepurchorderPage]
})
export class IssuepurchorderPageModule {}
