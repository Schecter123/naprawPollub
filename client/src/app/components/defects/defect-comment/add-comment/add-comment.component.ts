import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommentService } from 'src/app/shared/services/comment.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import {formatDate} from '@angular/common';
import { DefectService } from 'src/app/shared/services/defect.service';
import { Defect } from 'src/app/shared/models/defect.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  user: User;
  defect: Defect;
  text;

  constructor(private authService: AuthService, private commentService: CommentService, private userService: UserService, private defectService: DefectService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe((data: User) => {
      this.user = data; 
    })
    this.defect = this.defectService.defect;
  }

  addComment(){
    this.commentService.addComment({
      idUser: this.user.id,
      idDefect: this.defect.id,
      content: this.text,
      date: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en'),
    }).subscribe(
      () => { 
      //   this.router.navigateByUrl('/usterki', { skipLocationChange: true }).then(() => {
      //   this.router.navigate([`/usterki/${this.defect.id}`]);
      // });  
    },
      error => { }
    );
    
  }

}
