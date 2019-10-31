import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  list: User[];

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(environment.rootURL + '/users');
  }

  getUser(userLogin: string){
    return this.http.get<User>(environment.rootURL + '/users/'+userLogin+'/login');
  }

  getUserById(userId: number){
    console.log(userId);
    return this.http.get<User>(environment.rootURL + '/users/'+ userId);
  }
}
