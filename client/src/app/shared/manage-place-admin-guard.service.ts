import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserType } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ManagePlaceAdminGuard implements CanActivate{
  UserType = UserType;

  constructor(private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if (localStorage.getItem('userType') === UserType[UserType.PlaceAdministrator]) {
      return true;
    } else {
      return false;
    }
  }
}
