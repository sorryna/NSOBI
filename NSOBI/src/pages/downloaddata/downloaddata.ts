import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DownloaddataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
