import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterUserPage } from './register-user';

@NgModule({
  declarations: [
    RegisterUserPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterUserPage),
  ],
  exports: [
    RegisterUserPage
  ]
})
export class RegisterUserPageModule {}
