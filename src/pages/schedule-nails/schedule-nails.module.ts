import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleNailsPage } from './schedule-nails';

@NgModule({
  declarations: [
    ScheduleNailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleNailsPage),
  ],
  exports: [
    ScheduleNailsPage
  ]
})
export class ScheduleNailsPageModule {}
