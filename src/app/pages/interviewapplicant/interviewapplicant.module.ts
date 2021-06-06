import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InterviewapplicantPage } from './interviewapplicant.page';

const routes: Routes = [
  {
    path: '',
    component: InterviewapplicantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InterviewapplicantPage]
})
export class InterviewapplicantPageModule {}
