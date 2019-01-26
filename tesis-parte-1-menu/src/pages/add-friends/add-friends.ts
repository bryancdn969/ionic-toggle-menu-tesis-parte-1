import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-add-friends',
  templateUrl: 'add-friends.html',
})
export class AddFriendsPage {

  loginErrorString: string;
  requiredData: string;

  constructor(public navCtrl: NavController,public translateService: TranslateService, public navParams: NavParams) {
    this.translateService.get('HOME_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
    this.translateService.get('REQUIRED_DATA').subscribe((value) => {
      this.requiredData = value;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFriendsPage');
  }

}
