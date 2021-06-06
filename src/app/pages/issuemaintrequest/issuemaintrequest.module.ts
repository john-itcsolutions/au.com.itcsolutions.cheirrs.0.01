import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IssuemaintrequestPage } from './issuemaintrequest.page';

const routes: Routes = [
  {
    path: '',
    component: IssuemaintrequestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IssuemaintrequestPage]
})
export class IssuemaintrequestPageModule {}
