import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info-first',
  templateUrl: 'info-first.html',
})
export class InfoFirstPage {

  public WMImenu: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu.enable(false, "myMenu");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoFirstPage');
  }

  goToPage(page) {
    if (page == 'HomePage') {
      this.navCtrl.popToRoot();
    } else {
      this.navCtrl.push(page);
    }
  }
}
