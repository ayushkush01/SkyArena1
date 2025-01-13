import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  validUsername = 'admin';
  validPassword = 'admin123';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.router.navigate(['/']);
      this.loginFailed = false;
    } else {
      this.loginFailed = true;
    }
  }
}
