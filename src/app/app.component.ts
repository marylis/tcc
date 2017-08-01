import {Component, enableProdMode, ViewChild} from '@angular/core';
import {Platform, MenuController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {Abertura} from "../pages/abertura/abertura";
import {HomePage} from "../pages/home/home";
import {NativeStorage} from "@ionic-native/native-storage";
import {LoginProvider} from "../providers/login/login";
import {AddFestaPage} from "../pages/add-festa/add-festa";
enableProdMode();

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild('menuContent') nav;
    rootPage: any = Abertura;
    tipousu: number;

    //constantes
    pages: Array<{ component: any, title: string, icon: string }>;

    constructor(platform: Platform,
                statusBar: StatusBar,
                private menuCtrl: MenuController,
                splashScreen: SplashScreen,
                private nativeStorage: NativeStorage) {

        //tipo usu 1 -> empresa
        //tipo usu 2 -> usuario comum
        LoginProvider.emitirTipoUsu.subscribe(
            (tipo) => {
                this.tipousu = tipo;
                if(tipo == 1){
                    this.pages = [
                        {component: HomePage, title: 'Início', icon: 'home'},
                        {component: AddFestaPage, title: 'Adicionar Festa', icon: 'add-circle'}
                    ];
                }else{
                    this.pages = [
                        {component: HomePage, title: 'Início', icon: 'home'}
                    ];
                }
            }
        );

        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    openPage(page: any): void {
        this.nav.setRoot(page.component);
        this.menuCtrl.close();
    }

    logout(): void {
        delete this.tipousu;
        this.menuCtrl.close();

        this.nativeStorage.clear()
            .then(
                data => {
                    this.nav.setRoot(Abertura);
                },
                error => {
                    console.error('error clear storages', error);
                    this.nav.setRoot(Abertura);
                }
            );
    }
}
