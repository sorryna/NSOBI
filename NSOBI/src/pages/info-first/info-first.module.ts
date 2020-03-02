import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoFirstPage } from './info-first';

@NgModule({
  declarations: [
    InfoFirstPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoFirstPage),
  ],
})
export class InfoFirstPageModule {}
