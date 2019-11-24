import { Injectable } from '@angular/core';
import { UserType } from './models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagePageAdminGuard {
  UserType = UserType;

  constructor(private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if (localStorage.getItem('userType') === UserType[UserType.PageAdministrator]) {
      return true;
    } else {
      return false;
    }
  }
}
