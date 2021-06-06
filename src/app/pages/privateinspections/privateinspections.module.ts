import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrivateinspectionsPage } from './privateinspections.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateinspectionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrivateinspectionsPage]
})
export class PrivateinspectionsPageModule {}
