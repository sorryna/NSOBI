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

  firstGraph = 'https://app.powerbi.com/view?r=eyJrIjoiYTEzZjRhZjItNGQ0Yy00N2IwLThhZjEtZmRmOGM1ZTBhYThhIiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D';
  public graph: SafeResourceUrl;
  WMImenu: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer, public menu: MenuController, public alertCtrl: AlertController) {
    this.menu.enable(false, "myMenu");
    this.popUp();
  }

  popUp() {
    const alert = this.alertCtrl.create({
      // subTitle:"หมายเหตุ:",
      message:"เนื่องจากการแสดงขอบเขตแผนที่ระดับตำบลทั้งประเทศมีข้อมูลมากเกินไป <br> ดังนั้น เพื่อการแสดงผลที่สมบูรณ์ กรุณาเลือกพื้นที่เพื่อดูรายละเอียด",
      buttons: ["ตกลง"],
      
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(this.firstGraph)
  }
}
