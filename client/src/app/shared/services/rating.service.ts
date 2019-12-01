import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  getRating(defectId: number){
    return this.http.get(environment.rootURL + '/ratings/'+ defectId +'/defect');
  }

  getUserRating(userId: number){
    return this.http.get(environment.rootURL + '/ratings/'+ userId +'/user');
  }

  addRating(rating: Rating){
    return this.http.post(environment.rootURL + '/ratings/', rating);
  }
}
