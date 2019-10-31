import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserLogin } from 'src/app/shared/models/user.model';
import { MessageService } from 'src/app/shared/services/message.service';
import { Router } from '@angular/router';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showRegister;
  showLogin;

  loggedUser;

  constructor(private http: HttpClient, private messageService: MessageService, private router: Router) {}

  loginUser(userLogin:UserLogin){
    return this.http.post(environment.authURL + '/login/', userLogin).subscribe(
      (result) => {
        this.loggedUser = userLogin;
        this.messageService.success('Zostałeś zalogowany!');
        this.setSession(result);
        this.router.navigate(['/usterki/']);
      },
      err => { 
        this.messageService.error('Błąd logowania!');
        this.loggedUser = null;
      }
    );
  }

  setSession(result) {
    localStorage.setItem('loggedUser', result.user.login);
    localStorage.setItem('access_token', result.access_token);
    localStorage.setItem("expires_at", JSON.stringify(result.expires_at.valueOf()));
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("loggedUser");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
