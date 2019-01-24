import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ListPage} from "../list/list";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild('dateTime') dateTime;

  form: FormGroup;
  myDate: FormControl = new FormControl('', Validators.required);

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      myDate: this.myDate
    });

    setTimeout(_ => {
      //this.dateTime.setValue(new Date().toISOString());
    });
  }

  list(){
    this.navCtrl.setRoot(ListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  regresar() {
    this.navCtrl.setRoot(HomePage);  // remember to put this to add the back button behavior
  }
}
