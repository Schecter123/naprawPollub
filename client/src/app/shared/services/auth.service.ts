import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;
  showLogin: boolean = true;
  showRegister: boolean = true;

  constructor(public userService: UserService) {}

  login(){
    this.isLogged = true;
  }

  logout(){
    this.isLogged = false;
    this.userService.user = {
      type: 0,
      login: "",
      password: "",
      email: "",
      name: "",
      surname: ""
    };

    this.showLogin = true;
    this.showRegister = true;
  }

  show(){
    this.showLogin = true;
    this.showRegister = true;
  }
}
