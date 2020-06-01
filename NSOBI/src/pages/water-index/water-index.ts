import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { MainWMI, Main } from '../../models/WMI';
import { SubWMI } from '../../models/SubWMI';
import { IndexWWMI } from '../../models/IndexWMI';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer, public menu: MenuController, public alertCtrl: AlertController) {
    this.menu.enable(false, "myMenu");
    this.popUp();
  }

  popUp() {
    const alert = this.alertCtrl.create({
      subTitle: "หมายเหตุ : การนำเสนอแผนที่ระดับประเทศมีข้อมูลมากเกินไป กรุณาเลือกพื้นที่เพื่อดูรายละเอียด",
      buttons: ["ตกลง"],
      cssClass: "my-custom-class"
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(this.firstGraph)
  }
}
