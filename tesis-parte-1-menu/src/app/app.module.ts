import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import {ModalConfirmationPage} from "../pages/modal-confirmation/modal-confirmation";
import {SlidesPage} from "../pages/slides/slides";
import {SecureSitePage} from "../pages/secure-site/secure-site";
import {AddFriendsPage} from "../pages/add-friends/add-friends";
import {SearchSecureSitesPage} from "../pages/search-secure-sites/search-secure-sites";
import {ProfilePage} from "../pages/profile/profile"
import {PanicButtonPage} from "../pages/panic-button/panic-button";

import { TranslateModule, TranslateLoader  } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    ModalConfirmationPage,
    SlidesPage,
    SecureSitePage,
    AddFriendsPage,
    SearchSecureSitesPage,
    ProfilePage,
    PanicButtonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    ModalConfirmationPage,
    SlidesPage,
    SecureSitePage,
    AddFriendsPage,
    SearchSecureSitesPage,
    ProfilePage,
    PanicButtonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
