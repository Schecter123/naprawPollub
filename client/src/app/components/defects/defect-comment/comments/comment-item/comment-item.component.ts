import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { CommentService } from 'src/app/shared/services/comment.service';
import { Comment } from 'src/app/shared/models/comment.model';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  user: User;
  userLogin: string;
  editable: boolean = false;
  commentContent: string;
  subscribtionUser: Subscription;

  constructor(private userService: UserService, private commentService: CommentService) { }

  ngOnInit() {
    this.userLogin = localStorage.getItem('loggedUser');
    this.subscribtionUser = this.userService.getUserById(this.comment.idUser).subscribe( (data: User) => {this.user = data; console.log(this.user)})
  }

  makeChanges(){
    this.comment.content = this.commentContent;
    this.commentService.updateComment(this.comment).subscribe( 
      () => {this.ngOnInit();},
      err => {console.log(err)}
    );
    this.editable = false;
  }

  cancelChanges(){
    this.editable = false;
    this.ngOnInit();
  }

  deleteComment(){
    if(confirm("Jesteś pewnien, że chcesz usunąć tą usterkę?")){
      this.commentService.deleteComment(this.comment).subscribe( 
        () => {
          console.log('done')
        },
          err => {console.log(err)}
        );
      }
  }

  


}
