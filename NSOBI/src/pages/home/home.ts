import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public regAreaGraph: SafeResourceUrl;
  public WMImenu: any;
  allInThailand = "https://app.powerbi.com/view?r=eyJrIjoiMWEzYmVkYmMtOWYwYS00NzFmLTk5NjUtZjJjZGFlMWY4MzM4IiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D";


  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {
    this.regAreaGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.allInThailand);
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
}
