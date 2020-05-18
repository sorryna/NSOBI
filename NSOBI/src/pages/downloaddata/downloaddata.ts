import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-downloaddata',
  templateUrl: 'downloaddata.html',
})

export class DownloaddataPage {

  Area: any;
  WMImenu: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Area = "Reg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloaddataPage');
  }

  goToPage() {
    console.log(this.WMImenu);
    if (this.WMImenu == '1') {
      this.navCtrl.setRoot("InfoFirstPage")
    }
    if (this.WMImenu == '2') {
      this.navCtrl.setRoot("InfoFirstPage")
    }
    if (this.WMImenu == '3') {
      this.navCtrl.setRoot("InfoFirstPage")
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
