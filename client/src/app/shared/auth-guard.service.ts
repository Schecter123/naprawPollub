import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authSerivce: AuthService, private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    if (this.authSerivce.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/logowanie'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
