import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';

/**
 * Generated class for the WmiMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wmi-menu',
  templateUrl: 'wmi-menu.html',
})
export class WmiMenuPage {
  public allInThailandGraph: SafeResourceUrl;
  WMImenu: any;
  allInThailand = "https://app.powerbi.com/view?r=eyJrIjoiZWRkZTY3MzktMDc4MC00YzBiLThiMzItMjFmMzk4MTAwODgyIiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D";
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.allInThailandGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.allInThailand);
  }

}
