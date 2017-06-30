import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(translate:TranslateService) {
    translate.addLangs(['vi']);
    let lang = localStorage.getItem('lang');
    if (!lang){
      translate.use('en');
      localStorage.setItem('lang','en');
    }else {
      translate.use(lang)
    }
  }
}
