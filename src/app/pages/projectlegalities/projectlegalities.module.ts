import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectlegalitiesPage } from './projectlegalities.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectlegalitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectlegalitiesPage]
})
export class ProjectlegalitiesPageModule {}
