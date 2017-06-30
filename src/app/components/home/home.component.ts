import { Component } from '@angular/core'
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('English');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('English');
  }
}
