import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterUserPage } from '../pages/register-user/register-user';
import { RegisterAddressPage } from '../pages/register-address/register-address';
import { RegisterPaymentPage } from '../pages/register-payment/register-payment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	RegisterUserPage,
	RegisterAddressPage,
	RegisterPaymentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	RegisterUserPage,
	RegisterAddressPage,
	RegisterPaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
