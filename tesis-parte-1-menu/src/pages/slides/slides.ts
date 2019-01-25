import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

  goToHome(){
    this.navCtrl.setRoot(LoginPage);
  }

}
