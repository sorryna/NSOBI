import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainWMI, Main } from '../../models/WMI';
import { SubWMI, Sub } from '../../models/SubWMI';
import { IndexWWMI, IndexWMIValue } from '../../models/IndexWMI';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

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

  firstGraph = 'https://app.powerbi.com/reportEmbed?reportId=a9e6c25f-6de4-4921-9295-62b206a9fcf2&autoAuth=true&ctid=93793cef-3400-4bdb-81f4-925ccb3a6924&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ==';
  public graph: SafeResourceUrl; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterIndexPage');
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(this.firstGraph)
    console.log(this.graph);
    
  }

  onChange(name: string) {
    this.subWMI = Sub;
    this.indexValue = null;
    let main = this.mainWMI.find(it => it.name == name) || null;
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(main.graph);

    if (main) {
      this.subWMI = this.subWMI.filter(it => it.main == main.code);
      if (this.subWMI.length == 0) {
        this.subWMI = null;
        this.indexValue = IndexWMIValue.filter(it => it.main == main.code);
      }
    }
  }

  onChange1(name: string) {
    let code = this.subWMI.find(it => it.name == name);
    this.indexValue = IndexWMIValue.filter(it => it.sub == code.code);
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(code.graph);
  }

  onChange2(item: string) {
    let order = IndexWMIValue.find(it => it.name == item);
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(order.graph);
  }
}
