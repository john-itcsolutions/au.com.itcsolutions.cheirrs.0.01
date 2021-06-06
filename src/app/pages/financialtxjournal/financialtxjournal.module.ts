import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinancialtxjournalPage } from './financialtxjournal.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialtxjournalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinancialtxjournalPage]
})
export class FinancialtxjournalPageModule {}
