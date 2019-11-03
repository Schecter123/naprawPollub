import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-dropdown-button',
  template: `
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" routerLink="/{{loggedUser}}">Konto</a>
    <a class="dropdown-item" routerLink="/" (click)="authService.logout()">Wyloguj</a>
  </div>
  `,
  styles: []
})
export class DropdownButtonComponent implements OnInit, OnDestroy {

  loggedUser;
  userType;
  @Output() userTypeOutput = new EventEmitter<string>();
  
  constructor(private authService: AuthService,  private userService: UserService) { }

  ngOnInit() {
    this.loggedUser = localStorage.getItem("loggedUser");
    this.userType = localStorage.getItem("userType");
    this.userTypeOutput.emit(this.userType);
  }

  ngOnDestroy(){
  }

  

}
