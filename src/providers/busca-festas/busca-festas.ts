import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BuscaFestasProvider {

  url = 'http://balada.com.br/api';

  constructor(public http: Http) {
  }

  buscarFestas(){
    return this.http.get(this.url + '/festas').toPromise();
  }

  buscarFestaDetalhe(rota){
    return this.http.get(this.url + rota.trim()).toPromise();
  }

}
