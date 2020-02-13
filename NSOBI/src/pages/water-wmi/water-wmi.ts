import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AreaGraph, AGraph } from '../../models/AreaGraph';

@IonicPage()
@Component({
  selector: 'page-water-wmi',
  templateUrl: 'water-wmi.html',
})
export class WaterWmiPage {

  public graph: SafeResourceUrl;
  public graph2: SafeResourceUrl;
  public Area: any;
  public areaGraph: AreaGraph[] = AGraph;
  firstGraph ="https://app.powerbi.com/reportEmbed?reportId=36b6765d-6fc7-4fb9-bc76-72c07a7dc287&autoAuth=true&ctid=93793cef-3400-4bdb-81f4-925ccb3a6924&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D";
  firstGraph2 ="https://app.powerbi.com/reportEmbed?reportId=91038c2e-0282-417f-bdb6-296947d52362&autoAuth=true&ctid=93793cef-3400-4bdb-81f4-925ccb3a6924&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D";
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    console.log(this.Area);
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(this.firstGraph)
    this.graph2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.firstGraph2)
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad WaterWmiPage');
  }

  onChange(item: any) {
    console.log(item);
    let find = this.areaGraph.find(it => it.reg == item);
    console.log(find);
    this.graph = this.sanitizer.bypassSecurityTrustResourceUrl(find.graph);
  }
}
