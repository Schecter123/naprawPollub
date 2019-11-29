import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { ChangePassword } from '../models/change-password.model';


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
    return this.http.get<User>(environment.rootURL + '/users/'+ userId);
  }

  getUserByDefectId(defectId: number){
    return this.http.get<User>(environment.rootURL + '/users/'+ defectId + '/defect');
  }

  changePasssword(data: ChangePassword, userId: number){
    return this.http.put(environment.rootURL + '/users/' + userId + '/password/update', data);
  }

  changeUserType(user, data){
    return this.http.put(environment.rootURL + '/users/' + user + '/type/update', data);
  }
}
