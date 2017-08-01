import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {ManterProvider} from "../../providers/manter/manter";


@IonicPage()
@Component({
    selector: 'page-add-empresa',
    templateUrl: 'add-empresa.html',
})
export class AddEmpresaPage {

    public empresa = {};

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public manterProvider: ManterProvider) {
    }

    addEmp() {

        console.log("this.empresa: ", this.empresa);

        if (this.empresa['senha'] != this.empresa['senha_conf']) {
            let alert = this.alertCtrl.create({
                title: 'Ops!',
                subTitle: 'As senhas não conferem, por favor informe novamente a senha e sua confirmação!',
                buttons: ['OK']
            });
            alert.present();

        } else {
            console.log("senhas ok");
            this.navCtrl.pop();

            /*let loading = this.loadingCtrl.create({
             content: 'Carregando...'
             });

             loading.present();

             this.manterProvider.cadastrarEmp(this.empresa)
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

             //this.empresa = {};


             } else {
             loading.dismiss();

             let alert = this.alertCtrl.create({
             title: 'Cadastro efetuado com sucesso!',
             buttons: ['OK']
             });
             alert.present();
             this.navCtrl.pop();
             }

             }).catch((err) => {
             console.log(err);
             });*/
        }
    }

}
