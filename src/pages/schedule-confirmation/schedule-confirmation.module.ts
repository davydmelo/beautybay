import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleConfirmationPage } from './schedule-confirmation';

@NgModule({
  declarations: [
    ScheduleConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleConfirmationPage),
  ],
  exports: [
    ScheduleConfirmationPage
  ]
})
export class ScheduleConfirmationPageModule {}
