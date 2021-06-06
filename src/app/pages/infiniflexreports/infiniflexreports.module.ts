import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfiniflexreportsPage } from './infiniflexreports.page';

const routes: Routes = [
  {
    path: '',
    component: InfiniflexreportsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfiniflexreportsPage]
})
export class InfiniflexreportsPageModule {}
