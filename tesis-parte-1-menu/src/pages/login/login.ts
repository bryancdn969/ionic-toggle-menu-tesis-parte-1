import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { SignupPage} from "../signup/signup";
import {HomePage} from "../home/home";
import {ResetPasswordPage} from "../reset-password/reset-password";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignup(){
    this.navCtrl.setRoot(SignupPage);
  }

  goToResetPassword(){
    this.navCtrl.setRoot(ResetPasswordPage);
  }

  loginUser(){
    this.navCtrl.setRoot(HomePage);
  }

}
