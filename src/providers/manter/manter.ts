import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ManterProvider {

  private headers = new Headers({'Content-Type': 'application/json'});
  url = 'http://balada.com.br/api';

  constructor(public http: Http) {

  }

  cadastrarEmp(empresa){
    let params = JSON.stringify(empresa);

    return this.http.post(this.url + '/cadastroempresa', params, {headers: this.headers}).toPromise();

  }

  cadastrarFesta(obj){
    let params = JSON.stringify(obj);
    return this.http.post(this.url + '/festas/cadastrar', params, {headers: this.headers}).toPromise();
  }
}
