import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';

const routes: Routes = [
  {
  path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      },
      {
        path: 'tasks',
        loadChildren: '../tasks/tasks.module#TasksPageModule'
      },
      {
        path: 'talk',
        loadChildren: '../talk/talk.module#TalkPageModule'
      },
      {
        path: 'whistle',
        loadChildren: '../whistle/whistle.module#WhistlePageModule'
      },
      {
        path: 'help',
        loadChildren: '../help/help.module#HelpPageModule'
      },
      {
        path: 'quality',
        loadChildren: '../quality/quality.module#QualityPageModule'
      }, 
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule {}