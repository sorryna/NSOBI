import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WmiMenuPage');
  }

  InfoFirstPage(){
    this.navCtrl.push("InfoFirstPage");
  }

  InfoSecondPage(){
    this.navCtrl.push("InfoSecondPage");
  }

  InfoThirdPage(){
    this.navCtrl.push("InfoThirdPage");
  }

  InfofourthPage(){
    this.navCtrl.push("InfofourthPage");
  }
}
