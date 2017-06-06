import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssessThankPage } from './assess-thank';

@NgModule({
  declarations: [
    AssessThankPage,
  ],
  imports: [
    IonicPageModule.forChild(AssessThankPage),
  ],
  exports: [
    AssessThankPage
  ]
})
export class AssessThankPageModule {}
