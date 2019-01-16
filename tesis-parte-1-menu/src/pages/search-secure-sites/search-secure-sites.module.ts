import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchSecureSitesPage } from './search-secure-sites';

@NgModule({
  declarations: [
    SearchSecureSitesPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchSecureSitesPage),
  ],
})
export class SearchSecureSitesPageModule {}
