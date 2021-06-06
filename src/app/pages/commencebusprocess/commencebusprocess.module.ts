import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CommencebusprocessPage } from './commencebusprocess.page';

const routes: Routes = [
  {
    path: '',
    component: CommencebusprocessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CommencebusprocessPage]
})
export class CommencebusprocessPageModule {}
