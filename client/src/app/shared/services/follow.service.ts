import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Follow } from '../models/follow.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http: HttpClient) { }

  addFollow(follow: Follow) {
    return this.http.post(environment.rootURL + "/follows/", follow);
  }

  getFollows(){
    return this.http.get(environment.rootURL + "/follows");
  }

  getFollowsByUserId(userID){
    return this.http.get(environment.rootURL + "/follows/" + userID + '/user');
  }

  getPlacesWhichAreNotFollowedByUser(userID){
    return this.http.get(environment.rootURL + "/follows/" + userID + '/user/no');
  }

  deleteFollow(followID){
    return this.http.delete(environment.rootURL + '/follows/'+ followID);
  }

}
