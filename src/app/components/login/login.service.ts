import { Constant } from '../../constant/constant';
import {Http, RequestOptions,Headers} from '@angular/http';

import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  headers = new Headers();

  constructor(private http:Http){
    this.headers.append('http://localhost:4200', '*');
  }

  public Login(data){
    this.headers.append('Access-Control-Allow-Origin  ', '*');
    let option = new RequestOptions({
      headers : this.headers
    });
    this.http.post(Constant.URL_API,null,option).subscribe(function(res){
      console.log(res)
    })
  }
}
