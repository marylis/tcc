import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController, MenuController} from 'ionic-angular';

import {LoginProvider} from "../../providers/login/login";
import {HomePage} from "../home/home";
import {NativeStorage} from "@ionic-native/native-storage";
import {AddEmpresaPage} from "../add-empresa/add-empresa";
import {AddUsuarioPage} from "../add-usuario/add-usuario";


@IonicPage()
@Component({
    selector: 'page-abertura',
    templateUrl: 'abertura.html',
})
export class Abertura {

    private login = {};
    //private email: string;
    //private senha: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public loginProvider: LoginProvider,
                public menuCtrl: MenuController,
                private nativeStorage: NativeStorage) {
    }

    ionViewDidEnter() {
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeEnable(false);
    }

    cadastrar(){
        let confirm = this.alertCtrl.create({
            title: 'Efetuar cadastro de:',
            buttons: [
                {
                    text: 'Empresa',
                    handler: () => {
                        console.log('cadastrar empresa');
                        this.navCtrl.push(AddEmpresaPage);
                    }
                },
                {
                    text: 'Usuário Comum',
                    handler: () => {
                        console.log('cadastrar usuario comum');
                        this.navCtrl.push(AddUsuarioPage);
                    }
                }
            ]
        });
        confirm.present();
    }

    prelogin() {
        console.log("login:", this.login);

        let confirm = this.alertCtrl.create({
            title: 'Realizar login como:',
            buttons: [
                {
                    text: 'Empresa',
                    handler: () => {
                        console.log('realizar login como empresa');
                        //this.empresa();
                        //tirar esse nativeStorage daqui
                        this.nativeStorage.setItem('tipousu', {property: 1})
                            .then(
                                () => console.log('Stored item tipousu 1'),
                                error => console.error('Error storing item', error)
                            );

                        this.loginProvider.setarTipoUsu(1);
                        this.navCtrl.setRoot(HomePage);
                    }
                },
                {
                    text: 'Usuário Comum',
                    handler: () => {
                        console.log('realizar login como usuario comum');
                        //this.usuario();
                        //tirar esse nativeStorage daqui
                        this.nativeStorage.setItem('tipousu', {property: 2})
                            .then(
                                () => console.log('Stored item tipousu 2'),
                                error => console.error('Error storing item', error)
                            );
                        this.loginProvider.setarTipoUsu(2);
                        this.navCtrl.setRoot(HomePage);
                    }
                }
            ]
        });
        confirm.present();
    }

    usuario(){
        let loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });

        loading.present();

        this.loginProvider.logarUsuario(this.login)
            .then((resp) => {
                let json = resp.json();
                console.log("json: ", json);

                if (json.erro) {

                    loading.dismiss();
                    let alert = this.alertCtrl.create({
                        title: 'Erro',
                        subTitle: json.erro,
                        buttons: ['OK']
                    });
                    alert.present();

                    this.login = {};


                } else {

                    loading.dismiss();
                    this.nativeStorage.setItem('tipousu', {property: 2})
                        .then(
                            () => console.log('Stored item tipousu 2'),
                            error => console.error('Error storing item', error)
                        );

                    this.loginProvider.setarTipoUsu(2);
                    this.navCtrl.setRoot(HomePage);

                }

            }).catch((err) => {
            console.log(err);
        });
    }

    empresa(){
        let loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });

        loading.present();

        this.loginProvider.logarEmpresa(this.login)
            .then((resp) => {
                let json = resp.json();

                if (json.erro) {

                    loading.dismiss();
                    let alert = this.alertCtrl.create({
                        title: 'Erro',
                        subTitle: json.erro,
                        buttons: ['OK']
                    });
                    alert.present();

                    this.login = {};


                } else {

                    loading.dismiss();
                    this.nativeStorage.setItem('tipousu', {property: 1})
                        .then(
                            () => console.log('Stored item tipousu 1'),
                            error => console.error('Error storing item', error)
                        );

                    this.loginProvider.setarTipoUsu(1);
                    this.navCtrl.setRoot(HomePage);

                }

            }).catch((err) => {
            console.log(err);
        });
    }
}
