import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterarEmpresaPage } from './alterar-empresa';

@NgModule({
  declarations: [
    AlterarEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlterarEmpresaPage),
  ],
  exports: [
    AlterarEmpresaPage
  ]
})
export class AlterarEmpresaPageModule {}
