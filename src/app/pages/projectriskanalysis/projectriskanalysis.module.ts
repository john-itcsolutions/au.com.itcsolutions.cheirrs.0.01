import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectriskanalysisPage } from './projectriskanalysis.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectriskanalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectriskanalysisPage]
})
export class ProjectriskanalysisPageModule {}
