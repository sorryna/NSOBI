import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-downloaddata',
  templateUrl: 'downloaddata.html',
})

export class DownloaddataPage {

  Area: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Area = "Reg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloaddataPage');
  }
}
