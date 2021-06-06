import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IssuereceiptmtgepaymntshequPage } from './issuereceiptmtgepaymntshequ.page';

const routes: Routes = [
  {
    path: '',
    component: IssuereceiptmtgepaymntshequPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IssuereceiptmtgepaymntshequPage]
})
export class IssuereceiptmtgepaymntshequPageModule {}
