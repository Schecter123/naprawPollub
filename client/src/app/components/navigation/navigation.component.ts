import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User, UserType } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  
  isLoginVisible: boolean;
  
  loggedUser;
  subscribtion;
  user;

  constructor(private authService: AuthService, private userService: UserService) {
    authService.showRegister = true; 
    authService.showLogin = true;
  }

  ngOnInit() {
    if(this.authService.isLoggedIn()){
      // this.subscribtion = this.userService.getUser(this.loggedUser.login).subscribe( data => this.user = data);
    }
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
