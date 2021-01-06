import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-water-wmi',
  templateUrl: 'water-wmi.html',
})
export class WaterWmiPage {

  public allInThailandGraph: SafeResourceUrl;
  WMImenu: any;
  allInThailand = "https://app.powerbi.com/view?r=eyJrIjoiYWZkNzhhY2YtZmQ1MC00OGQ1LTlkMzEtZjBjMzM0MTVjMDUyIiwidCI6ImE5MDhlNDg0LWE0M2ItNDE2ZC05NTY3LTZmYjUzMWY3ZTA4MCIsImMiOjEwfQ%3D%3D";
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer, public menu: MenuController) {
    this.menu.enable(false, "myMenu");
    setTimeout(() => {
      this.allInThailandGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.allInThailand);
    }, 500);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad WaterWmiPage');
  }

  goToPage(page) {
    if (page == 'HomePage') {
      this.navCtrl.popToRoot();
    } else {
      this.navCtrl.push(page);
    }
  }
}
