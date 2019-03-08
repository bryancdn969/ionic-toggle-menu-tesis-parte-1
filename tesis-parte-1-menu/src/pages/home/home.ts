import { Component, Input, ElementRef, Renderer, Directive  } from '@angular/core';
import { NavController, DomController  } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Directive({
  selector: '[absolute-drag]'
})

export class HomePage {
  loginErrorString: string;
  requiredData: string;

  avatarImg : string = null;  

  @Input('startLeft') startLeft: any;
  @Input('startTop') startTop: any;


  constructor(public navCtrl: NavController,public translateService: TranslateService,
    public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {
    this.avatarImg = "http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png";
    this.translateService.get('HOME_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
    this.translateService.get('REQUIRED_DATA').subscribe((value) => {
      this.requiredData = value;
    });
  }

  ngAfterViewInit() {

    this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
    this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });
}

handlePan(ev){
    let newLeft = ev.center.x;
    let newTop = ev.center.y;

    this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
    });
}

}

