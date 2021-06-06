import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactbyshequownerPage } from './contactbyshequowner.page';

const routes: Routes = [
  {
    path: '',
    component: ContactbyshequownerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactbyshequownerPage]
})
export class ContactbyshequownerPageModule {}
