import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-search-secure-sites',
  templateUrl: 'search-secure-sites.html',
})
export class SearchSecureSitesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchSecureSitesPage');
  }

  regresar() {
      this.navCtrl.setRoot(HomePage);
  }

}
