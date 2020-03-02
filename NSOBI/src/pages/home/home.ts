import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goWaterIndexPage(){
    this.navCtrl.setRoot("WaterWmiPage");
  }

  WmiMenuPage(){
    this.navCtrl.push("WmiMenuPage");
  }
  goDownload(){
    this.navCtrl.push("DownloaddataPage");
  }
}
