import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginErrorString: string;
  requiredData: string;

  avatarImg : string = null;  

  constructor(public navCtrl: NavController,public translateService: TranslateService) {
    this.avatarImg = "http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png";
    this.translateService.get('HOME_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
    this.translateService.get('REQUIRED_DATA').subscribe((value) => {
      this.requiredData = value;
    });
  }

}
