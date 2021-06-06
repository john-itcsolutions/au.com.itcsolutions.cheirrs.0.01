import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportsinfiniflexPage } from './reportsinfiniflex.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsinfiniflexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportsinfiniflexPage]
})
export class ReportsinfiniflexPageModule {}
