import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPaymentPage } from './register-payment';

@NgModule({
  declarations: [
    RegisterPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPaymentPage),
  ],
  exports: [
    RegisterPaymentPage
  ]
})
export class RegisterPaymentPageModule {}
