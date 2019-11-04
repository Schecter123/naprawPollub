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
}
