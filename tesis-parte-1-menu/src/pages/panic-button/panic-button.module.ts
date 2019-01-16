import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanicButtonPage } from './panic-button';

@NgModule({
  declarations: [
    PanicButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(PanicButtonPage),
  ],
})
export class PanicButtonPageModule {}
