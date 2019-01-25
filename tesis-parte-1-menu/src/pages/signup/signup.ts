import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, 
  Loading, Modal, ModalController, ModalOptions, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginPage} from "../login/login";
import {ModalConfirmationPage} from "../modal-confirmation/modal-confirmation";
import {ProfilePage} from "../profile/profile";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signup = "Register";
  boolean        : any;
  activePassword : any;
  buttonRegister : any;
  buttonUpdate   : any;
  titleSignup    : any;
  titleUpdate    : any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private modal: ModalController) {
    //localStorage.setItem('changePage',this.signup);
    localStorage.getItem('update');
    console.log("update",localStorage.getItem('update') + "==" + null);
    if(localStorage.getItem('update') == null){
      this.boolean        = true;
      this.activePassword = false;
      this.buttonRegister = false;
      this.buttonUpdate   = true;
      this.titleSignup    = false;
      this.titleUpdate    = true;
    }else if(localStorage.getItem('update') == "false"){
      this.boolean        = false;
      this.activePassword = true;
      this.buttonRegister = true;
      this.buttonUpdate   = false;
      this.titleSignup    = true;
      this.titleUpdate    = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'You are sure the create this account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //this.navCtrl.setRoot(SignupPage);
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

  openModal() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modal.create(ModalConfirmationPage, { data: myModalData }, myModalOptions);
    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });
  }

  cancelar(){
    if(localStorage.getItem('changePage') == "Profile") {
      this.navCtrl.setRoot(ProfilePage);
    }else {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  regresar() {
    console.log(localStorage.getItem('changePage') +" == "+ "Profile");
    if(localStorage.getItem('changePage') == "Profile") {
      this.navCtrl.setRoot(ProfilePage);  // remember to put this to add the back button behavior
    }else {
      this.navCtrl.setRoot(LoginPage);
    }
  }

}
