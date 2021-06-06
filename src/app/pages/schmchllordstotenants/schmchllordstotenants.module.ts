import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmchllordstotenantsPage } from './schmchllordstotenants.page';

const routes: Routes = [
  {
    path: '',
    component: SchmchllordstotenantsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmchllordstotenantsPage]
})
export class SchmchllordstotenantsPageModule {}
