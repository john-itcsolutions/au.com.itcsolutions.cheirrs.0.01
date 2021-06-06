import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopassembliesixthlevelPage } from './workshopassembliesixthlevel.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopassembliesixthlevelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopassembliesixthlevelPage]
})
export class WorkshopassembliesixthlevelPageModule {}
