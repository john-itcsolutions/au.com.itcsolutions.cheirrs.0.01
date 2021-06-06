import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LinktoconveyitPage } from './linktoconveyit.page';

const routes: Routes = [
  {
    path: '',
    component: LinktoconveyitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinktoconveyitPage]
})
export class LinktoconveyitPageModule {}
