import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserType } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  
  
  isLoginVisible: boolean;
  UserType = UserType;
  // loggedUserType = localStorage.getItem('userType');
  userType;

  constructor(private authService: AuthService) {
    authService.showRegister = true; 
    authService.showLogin = true;
  }

  ngOnInit() {
    console.log(localStorage.getItem("loggedUser"))
  }

  
  ngOnDestroy(){}

  getUserType($event){
    this.userType = $event;
  }

}
