import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdevelopjobsPage } from './rdevelopjobs.page';

const routes: Routes = [
  {
    path: '',
    component: RdevelopjobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdevelopjobsPage]
})
export class RdevelopjobsPageModule {}
