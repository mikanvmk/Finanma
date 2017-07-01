import { Component } from '@angular/core'
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {

  language : string;
  nameLang = ['English','Viêt Nam'];

  constructor(private translate: TranslateService) {
    this.language = translate.currentLang;
  }

  selectLang(language) {
    this.language = language;
    this.translate.currentLang = language;
    this.translate.use(language);
    localStorage.setItem('lang',language);
  }

  register() {

  }
}
