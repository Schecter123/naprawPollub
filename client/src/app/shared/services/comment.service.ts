import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get<Comment[]>(environment.rootURL + '/comments');
  }

  getCommentsByDefectId(defectId: number){
    return this.http.get<Comment[]>(environment.rootURL + '/comments/' + defectId + '/defect');
  }
}
