import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArrearsbyportfolioPage } from './arrearsbyportfolio.page';

const routes: Routes = [
  {
    path: '',
    component: ArrearsbyportfolioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArrearsbyportfolioPage]
})
export class ArrearsbyportfolioPageModule {}
