import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public regAreaGraph: SafeResourceUrl;
  public WMImenu: any;
  allInThailand = "https://app.powerbi.com/view?r=eyJrIjoiMWRmMGRjNzItMjNlMC00Mjk4LWE1NDItNjU2N2U0ZDQ0YjVhIiwidCI6ImE5MDhlNDg0LWE0M2ItNDE2ZC05NTY3LTZmYjUzMWY3ZTA4MCIsImMiOjEwfQ%3D%3D&pageName=ReportSection47dd23fdc7102327a4a1";
  // "https://app.powerbi.com/view?r=eyJrIjoiMWEzYmVkYmMtOWYwYS00NzFmLTk5NjUtZjJjZGFlMWY4MzM4IiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D";


  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer, public menu: MenuController) {
    setTimeout(() => {
      this.regAreaGraph = this.sanitizer.bypassSecurityTrustResourceUrl(this.allInThailand);
    }, 1000);
    this.menu.enable(false, "myMenu");
  }

}
