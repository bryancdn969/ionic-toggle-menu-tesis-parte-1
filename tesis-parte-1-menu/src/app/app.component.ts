import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SlidesPage } from '../pages/slides/slides';
import {SecureSitePage} from "../pages/secure-site/secure-site";
import {AddFriendsPage} from "../pages/add-friends/add-friends";
import {SearchSecureSitesPage} from "../pages/search-secure-sites/search-secure-sites";
import {ProfilePage} from "../pages/profile/profile";
import {PanicButtonPage} from "../pages/panic-button/panic-button";

import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = SlidesPage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private translate: TranslateService, private config: Config) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '/',                   component: HomePage             ,icon:'person'},
      { title: 'Profile',             component: ProfilePage          ,icon:'person'},
      { title: 'Home',                component: HomePage             ,icon:'person'},
      { title: 'List',                component: ListPage             ,icon:'person'},
      { title: 'Panic Button',        component: PanicButtonPage      ,icon:'person'},
      { title: 'Secure sites',        component: SecureSitePage       ,icon:'person'},
      { title: 'Add friends',         component: AddFriendsPage       ,icon:'person'},
      { title: 'Search secure sites', component: SearchSecureSitesPage,icon:'person'}
    ];
    statusBar.styleDefault();
    splashScreen.hide();
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
    this.translate.setDefaultLang('en');
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

  logoutClicked() {
    console.log("Logout");
    this.platform.exitApp();
  }
}
