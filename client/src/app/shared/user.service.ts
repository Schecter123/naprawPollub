import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  list: User[];

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(environment.rootURL + '/users');
  }
}
