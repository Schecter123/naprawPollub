import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Defect, DefectState } from 'src/app/shared/models/defect.model';
import { Comment } from 'src/app/shared/models/comment.model';
import { CommentService } from 'src/app/shared/services/comment.service';
import { DefectService } from 'src/app/shared/services/defect.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-manage-page-admin-comments',
  templateUrl: './manage-page-admin-comments.component.html',
  styleUrls: ['./manage-page-admin-comments.component.css']
})
export class ManagePageAdminCommentsComponent implements OnInit {

  commentSubscribtion: Subscription;
  defectSubscribtion: Subscription;
  userSubscribtion: Subscription;

  userLogin: string;
  comments: Comment[];
  defects: Defect[];
  users: User[];
  check: number;
  showButton: boolean;
  changeState: boolean;
  DefectState = DefectState;
  listOfCommentsToDelete: Comment[] = [];

  constructor(private commentService: CommentService, private defectService: DefectService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.check = 0;
    this.showButton = false;
    this.changeState = false;
    this.commentSubscribtion = this.commentService.getComments().subscribe((data: Comment[])=>{this.comments = data})
    this.defectSubscribtion = this.defectService.getDefects().subscribe((data:Defect[]) => { this.defects = data})
    this.userSubscribtion = this.userService.getUsers().subscribe((data:User[]) => { this.users = data})
  }

  loadDefectItemPage(defectID){
    this.router.navigate(['/usterki/'+ defectID]);
  }

  change(event, comment){
    event.target.checked? this.check++ : this.check--;
    if(this.check>0) this.showButton = true;
    else this.showButton = false;
    console.log(event.target.checked)
    if(event.target.checked){
      this.listOfCommentsToDelete.push(comment);
    }
    if(!event.target.checked){
      this.listOfCommentsToDelete.splice(this.listOfCommentsToDelete.indexOf(comment), 1);
    }
  }

  delete(){
    for(let item of this.listOfCommentsToDelete){
      this.commentService.deleteComment(item).subscribe(() => {
        this.router.navigateByUrl('/pytania', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/zarzadzanie-administator']); 
        })
      })
    }
  }
}
