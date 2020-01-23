import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterIndexPage } from './water-index';

@NgModule({
  declarations: [
    WaterIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterIndexPage),
  ],
})
export class WaterIndexPageModule {}
