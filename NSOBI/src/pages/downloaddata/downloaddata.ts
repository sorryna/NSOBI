import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-downloaddata',
  templateUrl: 'downloaddata.html',
})

export class DownloaddataPage {

  Area: any;
  WMImenu: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.menu.enable(false, "myMenu");
    this.Area = "Reg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloaddataPage');
  }

}
