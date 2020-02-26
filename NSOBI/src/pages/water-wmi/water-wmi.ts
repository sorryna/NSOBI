import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Reg, RegGraph } from '../../models/Reg';
import { Province, provinceData } from '../../models/ProvinceData';

@IonicPage()
@Component({
  selector: 'page-water-wmi',
  templateUrl: 'water-wmi.html',
})
export class WaterWmiPage {

  public allInThailandGraph: SafeResourceUrl;
  public watereAreaGraph: SafeResourceUrl;
  public regAreaGraph: SafeResourceUrl;
  public Area: any;
  public areaGraph: Reg[] = RegGraph;
  public lstPro: Province[];
  public ProvinceGraph: Province[] = provinceData;
  allInThailand = "https://app.powerbi.com/reportEmbed?reportId=995b096f-aea3-4795-b821-f8a29a3c82bb&autoAuth=true&ctid=93793cef-3400-4bdb-81f4-925ccb3a6924&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D";
  watereArea = "https://app.powerbi.com/reportEmbed?reportId=b2c826bf-da5e-4d31-b0a2-fc36b2177c69&autoAuth=true&ctid=93793cef-3400-4bdb-81f4-925ccb3a6924&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D";
  regArea = "https://app.powerbi.com/reportEmbed?reportId=c9cf0e8a-11a2-4f25-8373-75febec326e4&autoAuth=true&ctid=93793cef-3400-4bdb-81f4-925ccb3a6924&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D";
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    console.log(this.Area);
    this.allInThailandGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.allInThailand);
    this.watereAreaGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.watereArea);
    this.regAreaGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.regArea);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad WaterWmiPage');
  }

  onChange(item: any) {
    let find = this.areaGraph.find(it => it.reg == item);
    this.lstPro = this.ProvinceGraph.filter(it => it.REG == find.regId);
    this.regAreaGraph = this.sanitizer.bypassSecurityTrustResourceUrl(find.graph);
  }

  // onChange2(item: any) {
  //   let find = this.ProvinceGraph.find(it => it.CWT_NAME == item);
  //   this.regAreaGraph = this.sanitizer.bypassSecurityTrustResourceUrl(find.Graph);
  // }
}
