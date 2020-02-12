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
  firstGraph ="";
  firstGraph2 ="";
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
