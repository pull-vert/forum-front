import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

interface Credentials {
  username: string,
  password: string
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  credentials: Credentials;

  constructor(private auth: AuthService) {}

  onLogin(credentials) {
    this.auth.login(credentials);
  }
}
