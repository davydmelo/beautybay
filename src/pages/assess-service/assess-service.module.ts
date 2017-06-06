import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssessServicePage } from './assess-service';

@NgModule({
  declarations: [
    AssessServicePage,
  ],
  imports: [
    IonicPageModule.forChild(AssessServicePage),
  ],
  exports: [
    AssessServicePage
  ]
})
export class AssessServicePageModule {}
