import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkingwithchildrencheckingPage } from './workingwithchildrenchecking.page';

const routes: Routes = [
  {
    path: '',
    component: WorkingwithchildrencheckingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkingwithchildrencheckingPage]
})
export class WorkingwithchildrencheckingPageModule {}
