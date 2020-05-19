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
  
}
