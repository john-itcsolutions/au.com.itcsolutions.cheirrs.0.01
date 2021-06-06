import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegsalesagentPage } from './regsalesagent.page';

const routes: Routes = [
  {
    path: '',
    component: RegsalesagentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegsalesagentPage]
})
export class RegsalesagentPageModule {}
