import { Component } from '@angular/core'
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {

  constructor(private translate: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
