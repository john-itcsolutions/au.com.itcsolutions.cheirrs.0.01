import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectschedulingPage } from './projectscheduling.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectschedulingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectschedulingPage]
})
export class ProjectschedulingPageModule {}
