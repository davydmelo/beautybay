import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterAddressPage } from '../register-address/register-address';

@IonicPage()
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
})
export class RegisterUserPage {

  registerAddressPage: any = RegisterAddressPage;	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onNext()
  {
	this.navCtrl.push(this.registerAddressPage);
  }

}
