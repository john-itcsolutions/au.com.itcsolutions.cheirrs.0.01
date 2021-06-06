import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfiniflexreportsfinPage } from './infiniflexreportsfin.page';

const routes: Routes = [
  {
    path: '',
    component: InfiniflexreportsfinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfiniflexreportsfinPage]
})
export class InfiniflexreportsfinPageModule {}
