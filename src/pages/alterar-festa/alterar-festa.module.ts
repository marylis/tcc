import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterarFestaPage } from './alterar-festa';

@NgModule({
  declarations: [
    AlterarFestaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlterarFestaPage),
  ],
  exports: [
    AlterarFestaPage
  ]
})
export class AlterarFestaPageModule {}
