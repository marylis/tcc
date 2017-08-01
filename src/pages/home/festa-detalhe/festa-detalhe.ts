import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {BuscaFestasProvider} from "../../../providers/busca-festas/busca-festas";


@IonicPage()
@Component({
    selector: 'page-festa-detalhe',
    templateUrl: 'festa-detalhe.html',
})
export class FestaDetalhePage {

    private id: number;
    public nome: string;
    public img: string;
    public festa: any[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private loadingCtrl: LoadingController,
                private buscaFestasProvider: BuscaFestasProvider) {
        this.id = this.navParams.get('id');
        this.nome = this.navParams.get('nome');
        this.img = this.navParams.get('img');

        this.loading();
    }

    loading() {
        let loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        loader.present();

        //OBJETOS COMPLEMENTARES
        let t1 = [];
        /*genero_sexual
         * 1-> masculino
         * 2-> feminino
         * 3-> geral*/

        t1.push(
            {id_genero_sexual: 1, valor_ingresso: 50},
            {id_genero_sexual: 2, valor_ingresso: 40},
            {id_genero_sexual: 3, valor_ingresso: 30}
        );

        let tb1 = [];
        tb1.push(
            {nome: 'Tequila'},
            {nome: 'Vodka'},
            {nome: 'Cerveja'}
        );

        let tb2 = [];
        tb2.push(
            {nome: 'Sushi'},
            {nome: 'Caldos'},
            {nome: 'Gelatina'}
        );

        let t = [];
        t.push(
            {
                nome: 'Tipo ingresso 1',
                tipo_ingresso_gen_sexual: t1,
                tipo_ingresso_bebida: tb1,
                tipo_ingresso_comida: tb2
            },
            {
                nome: 'Tipo ingresso 2 teste',
                tipo_ingresso_gen_sexual: t1,
                tipo_ingresso_bebida: tb1,
                tipo_ingresso_comida: tb2
            },
        );

        let a = [];
        a.push(
            {nome: 'Jorge e Matheus'},
            {nome: 'Matheus e Kauan'},
            {nome: 'Jonas Esticado'},
            {nome: 'Dj Alok'}
        );


        let g = [];
        g.push(
            {nome: 'Forró'},
            {nome: 'Pagode'},
            {nome: 'Eletrônica'},
            {nome: 'Rock'}
        );

        let venda = [];
        venda.push(
            {nome: 'ponto de venda 1', logradouro: 'Rua manoel bandeira, 514, Centro, Rubinéia-SP'},
            {
                nome: 'ponto de venda 2',
                logradouro: 'Rua general glicerio, 3958, apt 93, Centro, São José do Rio Preto-SP'
            },
        );

        let abada = [];
        abada.push(
            {
                nome: 'ponto de entrega 1',
                logradouro: 'Rua manoel bandeira, 514, Centro, Rubinéia-SP',
                inicio_entrega: '10/10/2010',
                fim_entrega: '10/11/2010',
                horario_inicio: '10',
                horario_fim: '22',
                requisito: 'Apresentar ingresso',
                obs: ''
            },
            {
                nome: 'ponto de entrega 2',
                logradouro: 'Rua general glicerio, 3958, apt 93, Centro, São José do Rio Preto-SP',
                inicio_entrega: '11/10/2010',
                fim_entrega: '11/11/2010',
                horario_inicio: '11',
                horario_fim: '23',
                requisito: 'Apresentar ingresso',
                obs: 'observações'
            },
        );

        let empresa = [];
        empresa.push(
            {nome: 'Empresa promotora', telefone: '99705-7653'}
        );

        let img_sec = [];
        img_sec.push(
            {img: this.img}
        );

        let l = [];
        l.push(
            {
                nome: 'Absolut Eventos',
                logradouro: 'Rua general glicerio, 3958, apt 93, Centro, São José do Rio Preto-SP'
            }
        );

        //OBJETO PRINCIPAL
        this.festa.push({
            img_principal: this.img,
            data: '10/10/2017',
            horario_inicio: '23',
            horario_termino: '8',
            genero_musical: g,
            atracoes: a,
            faixa_etaria: 18,
            local: l,
            tipo_ingressos: t,
            pontos_venda: venda,
            entrega_abada: abada,
            img_sec: img_sec,
            empresa: empresa,
            homens: 50,
            mulheres: 50

        });

        loader.dismiss();

        /* this.buscaFestasProvider.buscarFestaDetalhe(`festas?id=${this.id}`)
         .then((resp) => {
         let json = resp.json();
         this.festa = [];
         this.festa = json;
         loader.dismiss();
         console.log("json detalhe festa: ", json);
         }).catch((err) => {
         loader.dismiss();
         console.log(err);
         });*/
    }

    back(){
        this.navCtrl.pop();
    }

}
