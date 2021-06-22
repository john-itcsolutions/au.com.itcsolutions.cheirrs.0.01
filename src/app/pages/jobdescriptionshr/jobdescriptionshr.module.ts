import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JobdescriptionshrPage } from './jobdescriptionshr.page';

const routes: Routes = [
  {
    path: '',
    component: JobdescriptionshrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JobdescriptionshrPage]
})
export class JobdescriptionshrPageModule {}
