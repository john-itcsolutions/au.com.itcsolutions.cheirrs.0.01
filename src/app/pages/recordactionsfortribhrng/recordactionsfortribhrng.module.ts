import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecordactionsfortribhrngPage } from './recordactionsfortribhrng.page';

const routes: Routes = [
  {
    path: '',
    component: RecordactionsfortribhrngPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecordactionsfortribhrngPage]
})
export class RecordactionsfortribhrngPageModule {}
