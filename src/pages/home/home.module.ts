import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {FestaDetalhePageModule} from "./festa-detalhe/festa-detalhe.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    FestaDetalhePageModule,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
