import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, Loading, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SignupPage} from "../signup/signup";
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

}
