import { Component } from '@angular/core';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

export class RegisterComponent {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  onSubmit(data) {
    console.log(data)
  }
}
