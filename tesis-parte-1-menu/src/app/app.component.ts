import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Config, App, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SlidesPage } from '../pages/slides/slides';
import {SecureSitePage} from "../pages/secure-site/secure-site";
import {AddFriendsPage} from "../pages/add-friends/add-friends";
import {SearchSecureSitesPage} from "../pages/search-secure-sites/search-secure-sites";
import {ProfilePage} from "../pages/profile/profile";
import {PanicButtonPage} from "../pages/panic-button/panic-button";

import { TranslateService } from '@ngx-translate/core';
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "";
  count = "FirstTime";

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              private translate: TranslateService, private config: Config, public menuCtrl: MenuController,
              public app: App) {
    localStorage.getItem('init');
    if(localStorage.getItem('init') != this.count){
      this.rootPage = SlidesPage;
      localStorage.setItem('init', this.count);
      console.log("Contador set: " + this.count);
    }else {
      console.log("Contador else: " + this.count);
      this.rootPage = LoginPage;
    }

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',                component: HomePage             ,icon:'person'},
      { title: 'Profile',             component: ProfilePage          ,icon:'person'},
      { title: 'Secure sites',        component: SearchSecureSitesPage,icon:'person'},
      { title: 'Panic Button',        component: PanicButtonPage      ,icon:'person'},
      { title: 'Follow a friend',     component: SecureSitePage       ,icon:'person'},
      { title: 'Add friends',         component: AddFriendsPage       ,icon:'person'}
    ];
    this.initializeApp();
    this.initTranslate();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
