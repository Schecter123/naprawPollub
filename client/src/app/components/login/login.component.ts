import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';
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

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.authService.showLogin = false;

  }

  loginUser() {
    this.authService.loginUser({
      login: this.login,
      password: this.password,
      remember_me: false
    }).subscribe(
      () => {
        this.messageService.success('Zostałeś zalogowany!');
        this.router.navigate(['/usterki/']);
      },
      err => { this.messageService.error('Błąd logowania!'); }
    );
  }

  ngOnDestroy(){
  }

  // userLogin(form: NgForm){
  //   if(this.authService.userExist(this.login, this.password)){
  //     this.authService.login();
  //     this.user = this.dataService.user;
  //     this.router.navigate(['/strona-glowna']);
  //     console.log(this.user);
  //   }
  //   else {
  //     console.log("Nie ma takiego użytkownika!");
  //   }
  //   form.reset();
  // }

  // check(){
  //   if(!this.authService.userExist(this.login, this.password)){
  //     this.messageService.error("Niepoprawny login lub hasło");
  //   }
  // }
}
