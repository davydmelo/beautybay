import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleHairPage } from './schedule-hair';

@NgModule({
  declarations: [
    ScheduleHairPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleHairPage),
  ],
  exports: [
    ScheduleHairPage
  ]
})
export class ScheduleHairPageModule {}
