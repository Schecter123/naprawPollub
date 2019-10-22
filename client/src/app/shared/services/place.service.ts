import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  list: Place[];

  constructor(private http: HttpClient) { }

  getPlaces(){
    return this.http.get(environment.rootURL + '/places');
  }

  getParticularDefectPlace(idDefect){
    return this.http.get<Place>(environment.rootURL + '/defects/'+idDefect+'/place');
  }
}
