import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FestaDetalhePage} from './festa-detalhe';
import {Currencyformat} from "../../../pipes/currency-format/currency-format";

@NgModule({
    declarations: [
        FestaDetalhePage,
        Currencyformat
    ],
    imports: [
        IonicPageModule.forChild(FestaDetalhePage),
    ],
    exports: [
        FestaDetalhePage
    ]
})
export class FestaDetalhePageModule {
}
