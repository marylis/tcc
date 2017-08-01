import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Abertura } from './abertura';

@NgModule({
  declarations: [
    Abertura,
  ],
  imports: [
    IonicPageModule.forChild(Abertura),
  ],
  exports: [
    Abertura
  ]
})
export class AberturaModule {}
