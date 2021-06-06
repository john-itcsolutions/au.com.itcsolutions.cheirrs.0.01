import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IssueinitialbondrentreceiptsPage } from './issueinitialbondrentreceipts.page';

const routes: Routes = [
  {
    path: '',
    component: IssueinitialbondrentreceiptsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IssueinitialbondrentreceiptsPage]
})
export class IssueinitialbondrentreceiptsPageModule {}
