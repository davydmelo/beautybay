import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-payment',
  templateUrl: 'register-payment.html',
})
export class RegisterPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onBack()
  {
	this.navCtrl.pop();
  }

}
