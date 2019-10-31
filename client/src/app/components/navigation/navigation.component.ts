import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
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

  constructor(private authService: AuthService) {
    authService.showRegister = true; 
    authService.showLogin = true;
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    
  }

}
