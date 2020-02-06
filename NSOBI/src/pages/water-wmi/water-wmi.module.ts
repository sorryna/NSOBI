import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterWmiPage } from './water-wmi';

@NgModule({
  declarations: [
    WaterWmiPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterWmiPage),
  ],
})
export class WaterWmiPageModule {}
