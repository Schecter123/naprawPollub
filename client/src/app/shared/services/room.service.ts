import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  list: Room[];

  constructor(private http: HttpClient) { }

  getRooms(){
    return this.http.get(environment.rootURL + '/rooms');
  }

  getParticularDefectRoom(idDefect){
    return this.http.get<Room>(environment.rootURL + '/defects/'+idDefect+'/room');
  }
}
