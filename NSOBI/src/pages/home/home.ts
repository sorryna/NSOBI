import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public regAreaGraph: SafeResourceUrl;
  allInThailand = "https://app.powerbi.com/reportEmbed?reportId=995b096f-aea3-4795-b821-f8a29a3c82bb&autoAuth=true&ctid=93793cef-3400-4bdb-81f4-925ccb3a6924&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D";


  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {
    this.regAreaGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.allInThailand);
  }

  goWaterIndexPage(){
    this.navCtrl.setRoot("WaterWmiPage");
  }

  WmiMenuPage(){
    this.navCtrl.push("WmiMenuPage");
  }
  goDownload(){
    this.navCtrl.push("DownloaddataPage");
  }
}
