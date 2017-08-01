import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {AberturaModule} from "../pages/abertura/abertura.module";
import {LoginProvider} from '../providers/login/login';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HomePageModule} from "../pages/home/home.module";
import {BuscaFestasProvider} from '../providers/busca-festas/busca-festas';
import {NativeStorage} from "@ionic-native/native-storage";
import {AddFestaPageModule} from "../pages/add-festa/add-festa.module";
import { ManterProvider } from '../providers/manter/manter';
import {AddEmpresaPageModule} from "../pages/add-empresa/add-empresa.module";
import {AddUsuarioPageModule} from "../pages/add-usuario/add-usuario.module";
import {AlterarEmpresaPageModule} from "../pages/alterar-empresa/alterar-empresa.module";
import {AlterarFestaPageModule} from "../pages/alterar-festa/alterar-festa.module";
import {AlterarUsuarioPageModule} from "../pages/alterar-usuario/alterar-usuario.module";
import {Camera} from "@ionic-native/camera";


@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        AberturaModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        HomePageModule,
        AddFestaPageModule,
        AddEmpresaPageModule,
        AddUsuarioPageModule,
        AlterarEmpresaPageModule,
        AlterarFestaPageModule,
        AlterarUsuarioPageModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        LoginProvider,
        NativeStorage,
        BuscaFestasProvider,
        Camera,
    ManterProvider
    ]
})
export class AppModule {
}
