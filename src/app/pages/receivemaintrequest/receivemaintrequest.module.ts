import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceivemaintrequestPage } from './receivemaintrequest.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivemaintrequestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceivemaintrequestPage]
})
export class ReceivemaintrequestPageModule {}
