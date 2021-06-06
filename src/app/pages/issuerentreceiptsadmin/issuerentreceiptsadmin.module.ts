import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IssuerentreceiptsadminPage } from './issuerentreceiptsadmin.page';

const routes: Routes = [
  {
    path: '',
    component: IssuerentreceiptsadminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IssuerentreceiptsadminPage]
})
export class IssuerentreceiptsadminPageModule {}
