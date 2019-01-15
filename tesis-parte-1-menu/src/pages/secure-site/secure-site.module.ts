import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecureSitePage } from './secure-site';

@NgModule({
  declarations: [
    SecureSitePage,
  ],
  imports: [
    IonicPageModule.forChild(SecureSitePage),
  ],
})
export class SecureSitePageModule {}
