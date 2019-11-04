import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  login: string;
  password: string;
  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.showLogin = false;
    this.authService.showRegister = true;
  }

  loginUser() {
    this.authService.loginUser({
      login: this.login,
      password: this.password,
      remember_me: false
    });
  }

  ngOnDestroy() {
  }
}
