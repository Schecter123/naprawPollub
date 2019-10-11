import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Defect } from '../models/defect.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DefectService {

  list: Defect[];

  constructor(private http: HttpClient) { }

  getDefects(){
    return this.http.get(environment.rootURL + '/defects');
  }

  getDefectsRow(idPlace:number){
    return this.http.get(environment.rootURL + '/defects').pipe(map ((defects:Defect[]) => defects.filter((defect:Defect) => defect.idPlace == idPlace )));
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
