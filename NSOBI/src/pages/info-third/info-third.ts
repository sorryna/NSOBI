import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info-third',
  templateUrl: 'info-third.html',
})
export class InfoThirdPage {

  public WMImenu: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu.enable(false, "myMenu");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoThirdPage');
  }

  goToPage(page) {
    if (page == 'HomePage') {
      this.navCtrl.popToRoot();
    } else {
      this.navCtrl.push(page);
    }
  }
}
