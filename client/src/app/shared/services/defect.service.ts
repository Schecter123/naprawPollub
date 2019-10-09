import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Defect } from '../models/defect.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefectService {

  list: Defect[];

  constructor(private http: HttpClient) { }

  getDefects(){
    return this.http.get<Defect[]>(environment.rootURL + '/defects');
  }

  getParticularDefect(idDefect){
    return this.http.get(environment.rootURL + '/defects/'+idDefect);
  }

  getParticularDefectPlace(idDefect){
    return this.http.get(environment.rootURL + '/defects/'+idDefect+'/place');
  }

  getParticularDefectRoom(idDefect){
    return this.http.get(environment.rootURL + '/defects/'+idDefect+'/room');
  }
}
