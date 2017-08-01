import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {ManterProvider} from "../../providers/manter/manter";


@IonicPage()
@Component({
    selector: 'page-add-festa',
    templateUrl: 'add-festa.html',
})
export class AddFestaPage {

    public festa: any[] = [];
    public generos_musicais: any[] = [];
    public atracoes: any[] = [];
    public tp_ingressos: any[] = [];
    public tp_gen_sexual: any[] = [];
    public tp_bebidas: any[] = [];
    public tp_comidas: any[] = [];
    public pontos_venda: any[] = [];
    public pontos_entrega_abada: any[] = [];

    public img_princ: string = '';
    public imgs: any[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public camera: Camera,
                public loadingCtrl: LoadingController,
                public manter: ManterProvider) {

        this.init();
    }


    init() {

        this.festa = [];
        this.festa.push({
            nome: '',
            data: '',
        });
        //tipo_ingresso_gen_sexual
        this.tp_gen_sexual = [];
        this.tp_gen_sexual.push(
            {id_genero_sexual: 1, valor_ingresso: 0},
            {id_genero_sexual: 2, valor_ingresso: 0}
        );

        //tipo_ingresso_bebida
        this.tp_bebidas = [];
        this.tp_bebidas.push(
            {nome: ''}
        );

        //tipo_ingresso_comida
        this.tp_comidas = [];
        this.tp_comidas.push(
            {nome: ''}
        );

        //tipo_ingresso
        this.tp_ingressos = [];
        this.tp_ingressos.push(
            {
                nome: '',
                tipo_ingresso_gen_sexual: this.tp_gen_sexual,
                tipo_ingresso_bebida: this.tp_bebidas,
                tipo_ingresso_comida: this.tp_comidas
            }
        );

        //atracoes
        this.atracoes = [];
        this.atracoes.push(
            {nome: ''}
        );

        //SELECT DOS GENEROS MUSICAIS
        //generos_musicais
        this.generos_musicais.push(
            {id: 1, nome: 'Sertanejo', checked: false},
            {id: 2, nome: 'Pagode', checked: false},
            {id: 3, nome: 'Eletrônica', checked: false},
            {id: 4, nome: 'Pop', checked: false},
            {id: 5, nome: 'Outros', checked: false},
        );

        //pontos_venda
        this.pontos_venda.push(
            {nome: '', cep: '', logradouro: '', numero: '', complemento: '', bairro: '', cidade: '', estado: ''}
        );

        //preencher só se existir abada
        //pontos_entrega_abada
        this.pontos_entrega_abada.push(
            {
                nome: '',
                cep: '',
                logradouro: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: '',
                dt_inicio: '',
                dt_fim: '',
                hr_inicio: '',
                hr_fim: ''
            }
        );
    }

    addTpIngresso() {
        this.tp_gen_sexual = [];
        this.tp_gen_sexual.push(
            {id_genero_sexual: 1, valor_ingresso: 0},
            {id_genero_sexual: 2, valor_ingresso: 0},
            {id_genero_sexual: 3, valor_ingresso: 0}
        );

        this.tp_bebidas = [];
        this.tp_bebidas.push(
            {nome: ''}
        );

        this.tp_comidas = [];
        this.tp_comidas.push(
            {nome: ''}
        );

        this.tp_ingressos.push(
            {
                nome: '',
                tipo_ingresso_gen_sexual: this.tp_gen_sexual,
                tipo_ingresso_bebida: this.tp_bebidas,
                tipo_ingresso_comida: this.tp_comidas
            }
        );
    }

    addPontoVenda() {
        this.pontos_venda.push(
            {nome: '', cep: '', logradouro: '', numero: '', complemento: '', bairro: '', cidade: '', estado: ''}
        )
    }

    addPontoEntregaAbada() {
        this.pontos_entrega_abada.push(
            {
                nome: '',
                cep: '',
                logradouro: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: '',
                dt_inicio: '',
                dt_fim: '',
                hr_inicio: '',
                hr_fim: ''
            }
        );
    }

    addBebida(t) {
        t.tipo_ingresso_bebida.push(
            {nome: ''}
        );
    }

    addComida(t) {
        t.tipo_ingresso_comida.push(
            {nome: ''}
        );
    }

    addFesta() {
        let loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });

        loading.present();

        this.festa.push({
            atracoes: this.atracoes,
            pontos_entrega_abada: this.pontos_entrega_abada,
            generos_musicais: this.generos_musicais,
            pontos_venda: this.pontos_venda,
            tipo_ingresso: this.tp_ingressos,
            id_empresa: 1
        });

        console.log("entrou no add festa");
        console.log("festa: ", this.festa);
        console.log("generos_musicais: ", this.generos_musicais);
        console.log("atracoes: ", this.atracoes);
        console.log("tp_ingressos: ", this.tp_ingressos);
        console.log("pontos_venda: ", this.pontos_venda);
        console.log("pontos_entrega_abada: ", this.pontos_entrega_abada);



        this.manter.cadastrarFesta(this.festa)
            .then((resp) => {
                let json = resp.json();
                console.log("json add festa: ", json);

                if (json.erro) {

                    loading.dismiss();
                    let alert = this.alertCtrl.create({
                        title: 'Erro',
                        subTitle: json.erro,
                        buttons: ['OK']
                    });
                    alert.present();

                } else {

                    loading.dismiss();
                    let alert = this.alertCtrl.create({
                        title: 'Pronto!',
                        subTitle: 'Festa cadastrada com sucesso.',
                        buttons: ['OK']
                    });
                    alert.present();
                    this.festa = [];
                    this.init();
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    addAtracao() {
        this.atracoes.push(
            {nome: ''}
        );
    }

    excluirAtracao(i) {
        let confirm = this.alertCtrl.create({
            title: 'Remover atraçao?',
            message: 'Deseja realmente remover esta atração deste cadastro de festa?',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.atracoes.splice(i, 1);
                    }
                }
            ]
        });
        confirm.present();

    }

    addImgCapa() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            correctOrientation: true
        };

        this.camera.getPicture(options).then((imageData) => {

            this.img_princ = 'data:image/jpeg;base64,' + imageData;

        }, (err) => {
            console.log("error:", err);
        });
    }

    addImg() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            correctOrientation: true
        };

        this.camera.getPicture(options).then((imageData) => {

            this.imgs.push({
                image: 'data:image/jpeg;base64,' + imageData
            });

        }, (err) => {
            console.log("error:", err);
        });
    }

    excluirImgCapa(i) {
        let confirm = this.alertCtrl.create({
            title: 'Remover imagem de capa?',
            message: 'Deseja realmente remover esta imagem de capa?',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.img_princ = '';
                    }
                }
            ]
        });
        confirm.present();

    }


    excluirImg(i) {
        let confirm = this.alertCtrl.create({
            title: 'Remover imagem?',
            message: 'Deseja realmente remover esta imagem?',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.imgs.splice(i, 1);
                    }
                }
            ]
        });
        confirm.present();

    }

    excluirBebida(i, t) {
        let confirm = this.alertCtrl.create({
            title: 'Remover bebida?',
            message: 'Deseja realmente remover esta bebida deste tipo de ingresso?',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        t.tipo_ingresso_bebida.splice(i, 1);
                    }
                }
            ]
        });
        confirm.present();
    }

    excluirComida(i, t) {
        let confirm = this.alertCtrl.create({
            title: 'Remover comida?',
            message: 'Deseja realmente remover esta comida deste tipo de ingresso?',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        t.tipo_ingresso_comida.splice(i, 1);
                    }
                }
            ]
        });
        confirm.present();
    }

    excluirPontoVenda(i) {
        let confirm = this.alertCtrl.create({
            title: 'Remover ponto de venda?',
            message: 'Deseja realmente remover este ponto de venda?',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.pontos_venda.splice(i, 1);
                    }
                }
            ]
        });
        confirm.present();
    }

    excluirPontoEntregaAbada(i) {
        let confirm = this.alertCtrl.create({
            title: 'Remover ponto de entrega de abadá?',
            message: 'Deseja realmente remover este ponto de entrega?',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.pontos_entrega_abada.splice(i, 1);
                    }
                }
            ]
        });
        confirm.present();
    }
}
