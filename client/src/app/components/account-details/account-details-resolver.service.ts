import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsResolverService implements Resolve<User>{
 
  constructor(private userService: UserService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): User | import("rxjs").Observable<User> | Promise<User> {
    const login = route.params['login'];
    return this.userService.getUser(login);
  }
}
