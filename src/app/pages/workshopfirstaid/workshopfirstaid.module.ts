import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopfirstaidPage } from './workshopfirstaid.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopfirstaidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopfirstaidPage]
})
export class WorkshopfirstaidPageModule {}
