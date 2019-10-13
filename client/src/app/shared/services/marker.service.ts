import { Injectable } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  list: Marker[];
  markerID: number;

  constructor(private http: HttpClient) { }

  getMarkers(){
    return this.http.get(environment.rootURL + '/markers');
  }

  getDefectCount(markerId){
    return this.http.get(`${environment.rootURL}/markers/${markerId}/count`); 
  }
}
