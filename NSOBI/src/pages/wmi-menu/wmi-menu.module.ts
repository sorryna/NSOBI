import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WmiMenuPage } from './wmi-menu';

@NgModule({
  declarations: [
    WmiMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(WmiMenuPage),
  ],
})
export class WmiMenuPageModule {}
