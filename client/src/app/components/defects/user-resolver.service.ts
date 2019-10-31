import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User>{
 

  constructor(private userService: UserService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): User | import("rxjs").Observable<User> | Promise<User> {
    const id = parseInt(route.params['id']);
    return this.userService.getUserById(id);
  }
}
