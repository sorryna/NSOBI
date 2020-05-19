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


}
