import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginProvider {

  static emitirTipoUsu = new EventEmitter();
  private headers = new Headers({'Content-Type': 'application/json'});
  loginUrl = 'http://balada.com.br/api';


  constructor(public http: Http) {
  }

  //redireciona
  setarTipoUsu(tipo) {
    LoginProvider.emitirTipoUsu.emit(tipo);
  }

  logarUsuario(login){
    let params = JSON.stringify({email: login.email, password: login.senha});

    return this.http.post(this.loginUrl + '/usuario', params, {headers: this.headers}).toPromise();

  }

  logarEmpresa(login){
    let params = JSON.stringify({email: login.email, password: login.senha});

    return this.http.post(this.loginUrl + '/empresa', params, {headers: this.headers}).toPromise();
  }

}
