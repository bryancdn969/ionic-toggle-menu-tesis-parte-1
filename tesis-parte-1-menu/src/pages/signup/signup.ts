import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, 
  Loading, Modal, ModalController, ModalOptions,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginPage} from "../login/login";
//import { SignupPage} from "../signup/signup";
import {ModalConfirmationPage} from "../modal-confirmation/modal-confirmation";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
              private modal: ModalController) {
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
    this.navCtrl.setRoot(LoginPage);
  }

}
