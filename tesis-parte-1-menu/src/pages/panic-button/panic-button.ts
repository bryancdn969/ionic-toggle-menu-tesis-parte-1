import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-panic-button',
  templateUrl: 'panic-button.html',
})
export class PanicButtonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanicButtonPage');
  }

  regresar() {
    this.navCtrl.setRoot(HomePage);  // remember to put this to add the back button behavior
  }

  addFriends(){

  }

}
