import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopassembliestoplevelPage } from './workshopassembliestoplevel.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopassembliestoplevelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopassembliestoplevelPage]
})
export class WorkshopassembliestoplevelPageModule {}
