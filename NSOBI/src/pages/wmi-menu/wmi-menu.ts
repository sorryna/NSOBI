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

  goToPage() {
    console.log(this.WMImenu);
    if (this.WMImenu == '1') {
      this.navCtrl.setRoot("WaterIndexPage")
    }
    if (this.WMImenu == '2') {
      this.navCtrl.setRoot("WaterWmiPage")
    }
    if (this.WMImenu == '3') {
      this.navCtrl.setRoot("WmiMenuPage")
    }
    if (this.WMImenu == '4') {
      this.navCtrl.setRoot("DownloaddataPage")
    }
    if (this.WMImenu == '5') {
      this.navCtrl.setRoot("InfoFirstPage")
    }
    if (this.WMImenu == '6') {
      this.navCtrl.setRoot("InfoSecondPage")
    }
    if (this.WMImenu == '7') {
      this.navCtrl.setRoot("InfoThirdPage")
    }
    if (this.WMImenu == '8') {
      this.navCtrl.setRoot("InfofourthPage")
    }
  }

  goHomePage() {
    this.navCtrl.setRoot(HomePage)
  }
}
