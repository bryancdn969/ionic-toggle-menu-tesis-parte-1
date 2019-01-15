import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public isToggled: boolean) {
    this.isToggled = false;
  }

  notify() {
    console.log("Toggled: "+ this.isToggled);
  }
}
