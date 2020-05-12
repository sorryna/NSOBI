import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public regAreaGraph: SafeResourceUrl;
  allInThailand = "https://app.powerbi.com/view?r=eyJrIjoiMWEzYmVkYmMtOWYwYS00NzFmLTk5NjUtZjJjZGFlMWY4MzM4IiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D";


  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {
    this.regAreaGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.allInThailand);
  }

  goWaterIndexPage(){
    this.navCtrl.setRoot("WaterIndexPage");
  }

  WmiMenuPage(){
    // this.navCtrl.push("WmiMenuPage");
    // http://localhost:8100/
    open("https://watersurvey.azurewebsites.net/#/wmi-menu");
    // open("http://localhost:8100//#/wmi-menu");

  }

  goDownload(){
    // 
    // open("https://demowaters.azurewebsites.net/#/downloaddata");
    open("https://watersurvey.azurewebsites.net/#/downloaddata");
  }

  openWaterArea(){
    
  }
}
