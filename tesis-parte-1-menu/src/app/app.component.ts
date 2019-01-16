import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = SlidesPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '/',                   component: HomePage},
      { title: 'Profile',             component: ProfilePage},
      { title: 'Home',                component: HomePage},
      { title: 'List',                component: ListPage},
      { title: 'Panic Button',        component: PanicButtonPage},
      { title: 'Secure sites',        component: SecureSitePage},
      { title: 'Add friends',         component: AddFriendsPage},
      { title: 'Search secure sites', component: SearchSecureSitesPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
