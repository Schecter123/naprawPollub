import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserType } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ManageUserGuard implements CanActivate{
  
  UserType = UserType;

  constructor(private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if (localStorage.getItem('userType') === UserType[UserType.Standard]) {
      return true;
    } else {
      console.log(localStorage.getItem('userType'))
      console.log(UserType[UserType.Standard])
      return false;
    }
  }
}
