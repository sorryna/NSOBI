import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainWMI, Main } from '../../models/WMI';
import { SubWMI, Sub } from '../../models/SubWMI';
import { IndexWWMI, IndexWMIValue } from '../../models/IndexWMI';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';

/**
 * Generated class for the WaterIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-water-index',
  templateUrl: 'water-index.html',
})
export class WaterIndexPage {

  public mainWMI: MainWMI[] = Main;
  public subWMI: SubWMI[] = null;
  public indexValue: IndexWWMI[] = null;

  firstGraph = 'https://app.powerbi.com/view?r=eyJrIjoiYzJmMzI2ZmEtNGQ3Mi00OGU3LWJmMzUtNjljY2MwYWRlNTFlIiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D';
  public graph: SafeResourceUrl;
  WMImenu: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WaterIndexPage');
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(this.firstGraph)
    // console.log(this.graph);

  }
  
  goToPage(){
    console.log(this.WMImenu);
    if (this.WMImenu == '1') {
      this.navCtrl.setRoot("WaterIndexPage")
    }
    if (this.WMImenu == '2') {
      this.navCtrl.setRoot("WaterWmiPage")
    }
    if (this.WMImenu == '3') {
      this.navCtrl.setRoot("WmiMenuPage")
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

  goHomePage(){
      this.navCtrl.setRoot(HomePage)
  }
}
