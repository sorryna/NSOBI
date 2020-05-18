import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Reg, RegGraph } from '../../models/Reg';
import { Province, provinceData } from '../../models/ProvinceData';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-water-wmi',
  templateUrl: 'water-wmi.html',
})
export class WaterWmiPage {

  public allInThailandGraph: SafeResourceUrl;
  WMImenu: any;
  allInThailand = "https://app.powerbi.com/view?r=eyJrIjoiZTU4MzY2NmEtZjA1OS00MDc2LThmZWItMzBhNGZkMGZkN2ZkIiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D";
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.allInThailandGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.allInThailand);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad WaterWmiPage');
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
