import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeConfirmationPage } from './code-confirmation';

@NgModule({
  declarations: [
    CodeConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(CodeConfirmationPage),
  ],
  exports: [
    CodeConfirmationPage
  ]
})
export class CodeConfirmationPageModule {}
