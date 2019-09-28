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
}
