import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserType } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isLoginVisible: boolean;
  UserType = UserType;
  userType;
  loggedUser;
  isManageVisible: boolean;
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authService.showRegister = true;
    this.authService.showLogin = true;

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd && (ev.url !== '/rejestracja' && ev.url !== '/logowanie')) {
        this.authService.showRegister = true;
        this.authService.showLogin = true;
        if (this.authService.isLoggedIn()) {
          this.loggedUser = localStorage.getItem('loggedUser');
        }
      }
    });

    console.log(localStorage.getItem("loggedUser"))
  }


  ngOnDestroy() { }

  getUserType($event) {
    this.userType = $event;
    setTimeout(() => this.checkUserType(), 0);
  }

  checkUserType() {
    if (this.userType === UserType[UserType.Standard]) {
      this.isManageVisible = true;
    } else {
      this.isManageVisible = false;
    }
  }

}
