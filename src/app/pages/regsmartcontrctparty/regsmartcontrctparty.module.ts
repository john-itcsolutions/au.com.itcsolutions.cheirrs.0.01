import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegsmartcontrctpartyPage } from './regsmartcontrctparty.page';

const routes: Routes = [
  {
    path: '',
    component: RegsmartcontrctpartyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegsmartcontrctpartyPage]
})
export class RegsmartcontrctpartyPageModule {}
