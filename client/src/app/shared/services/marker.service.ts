import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Marker } from '../models/marker.model';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  list: Marker[];
  markerID: number;
  markerLatitudeAndLongitude: number[];

  constructor(private http: HttpClient) { }

  getMarkers(){
    return this.http.get(environment.rootURL + '/markers');
  }

  getAllMarkers(){
    return this.http.get(environment.rootURL + '/all/markers');
  }

  getDefectCount(markerId){
    return this.http.get(`${environment.rootURL}/markers/${markerId}/count`); 
  }

  createMarker(marker: Marker){
    return this.http.post(environment.rootURL + '/markers/', marker);
  }

}
