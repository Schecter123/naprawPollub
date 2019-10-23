import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserLogin } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;
  showLogin: boolean = true;
  showRegister: boolean = true;

  constructor(private http: HttpClient) {}

  login(){
    this.isLogged = true;
  }

  loginUser(userLogin:UserLogin){
    console.log(userLogin);
    return this.http.post(environment.authURL + '/login/', userLogin);
  }

  // logout(){
  //   this.isLogged = false;
  //   this.userService.user = {
  //     type: 0,
  //     login: "",
  //     password: "",
  //     email: "",
  //     name: "",
  //     surname: ""
  //   };

  //   this.showLogin = true;
  //   this.showRegister = true;
  // }

  show(){
    this.showLogin = true;
    this.showRegister = true;
  }
}
