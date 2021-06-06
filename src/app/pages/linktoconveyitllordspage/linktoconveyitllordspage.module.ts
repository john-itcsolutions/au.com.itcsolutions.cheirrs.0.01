import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LinktoconveyitllordspagePage } from './linktoconveyitllordspage.page';

const routes: Routes = [
  {
    path: '',
    component: LinktoconveyitllordspagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinktoconveyitllordspagePage]
})
export class LinktoconveyitllordspagePageModule {}
