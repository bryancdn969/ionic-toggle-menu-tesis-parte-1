import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ListPage} from "../list/list";
import {HomePage} from "../home/home";
import {SignupPage} from "../signup/signup";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild('dateTime') dateTime;

  form: FormGroup;
  myDate: FormControl = new FormControl('', Validators.required);
  activeItems = "false";
  profile = "Profile";

  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    localStorage.setItem('update',this.activeItems);
    console.log("profile", localStorage.getItem('update'));
    localStorage.setItem('changePage', this.profile);
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

  update(){
    this.navCtrl.setRoot(SignupPage);
  }
}
