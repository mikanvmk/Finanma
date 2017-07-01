import {NgForm} from '@angular/forms';
import { Component } from '@angular/core'
import { Constant } from '../../constant/constant';
import { HttpClient } from '../../constant/httpClient';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {
  constructor(private http: HttpClient){

  }

  onSubmit(data){
    let bodyString = JSON.stringify(data);
    this.http.post(Constant.URL_API,bodyString)
  }
}
