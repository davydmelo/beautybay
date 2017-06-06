import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleMakeupPage } from './schedule-makeup';

@NgModule({
  declarations: [
    ScheduleMakeupPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleMakeupPage),
  ],
  exports: [
    ScheduleMakeupPage
  ]
})
export class ScheduleMakeupPageModule {}
