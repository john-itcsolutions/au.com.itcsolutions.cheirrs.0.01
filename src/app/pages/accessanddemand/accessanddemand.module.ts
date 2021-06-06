import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccessanddemandPage } from './accessanddemand.page';

const routes: Routes = [
  {
    path: '',
    component: AccessanddemandPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccessanddemandPage]
})
export class AccessanddemandPageModule {}
