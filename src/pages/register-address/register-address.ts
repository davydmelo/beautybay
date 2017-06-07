import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPaymentPage } from '../register-payment/register-payment';

@IonicPage()
@Component({
  selector: 'page-register-address',
  templateUrl: 'register-address.html',
})
export class RegisterAddressPage {

  registerPaymentPage: any = RegisterPaymentPage;	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onBack()
  {
	this.navCtrl.pop();
  }
  
  onNext()
  {
	this.navCtrl.push(this.registerPaymentPage);
  }

}
