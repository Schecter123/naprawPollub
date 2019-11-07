import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment.model';

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

  addComment(comment: Comment){
    return this.http.post(environment.rootURL + '/comments', comment);
  }
}
