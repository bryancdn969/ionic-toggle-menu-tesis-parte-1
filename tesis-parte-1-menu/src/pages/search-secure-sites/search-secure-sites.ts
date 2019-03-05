import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {Geolocation} from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-search-secure-sites',
  templateUrl: 'search-secure-sites.html',
})
export class SearchSecureSitesPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  boolean = false;
  typesSites = { state: 0 };
  sites = [
    {value: 1, name: 'Clinics'},
    {value: 2, name: 'Firefighters'},
    {value: 3, name: 'Hospitals'},
    {value: 4, name: 'Parks'},
    {value: 5, name: 'Police'},
    {value: 6, name: 'Everyone'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchSecureSitesPage');

/*      if(this.sites[0].value == 0 ){
        this.boolean = false;
      } else {
        this.loadMap();
      }*/

  }

  regresar() {
    this.navCtrl.setRoot(HomePage);
  }

  loadMap() {
    // @ts-ignore
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Information!</h4>";
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}
