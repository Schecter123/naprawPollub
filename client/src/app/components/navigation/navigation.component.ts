import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  
  isLoginVisible: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.showRegister = true; 
    this.authService.showLogin = true;

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd && (ev.url !== '/rejestracja' && ev.url !== '/logowanie')) {
        this.authService.showRegister = true;
        this.authService.showLogin = true;
      }
    });
  }

  ngOnDestroy(){
    
  }

}
