import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckapplicantsbackgroundbypropertyPage } from './checkapplicantsbackgroundbyproperty.page';

const routes: Routes = [
  {
    path: '',
    component: CheckapplicantsbackgroundbypropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckapplicantsbackgroundbypropertyPage]
})
export class CheckapplicantsbackgroundbypropertyPageModule {}
