import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';
import { DefectService } from 'src/app/shared/services/defect.service';
import { Subscription } from 'rxjs';
import { Defect } from 'src/app/shared/models/defect.model';
import { Router } from '@angular/router';
import { Comment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-manage-page-user-comments',
  templateUrl: './manage-page-user-comments.component.html',
  styleUrls: ['./manage-page-user-comments.component.css']
})
export class ManagePageUserCommentsComponent implements OnInit {

  commentSubscribtion: Subscription;
  defectSubscribtion: Subscription;

  userLogin: string;
  comments: Comment[];
  defects: Defect[];
  check: number;
  showButton: boolean;
  listOfCommentsToDelete: Comment[] = [];

  constructor(private commentService: CommentService,private defectService: DefectService, private router: Router) { }

  ngOnInit() {
    this.check = 0;
    this.showButton = false;

    this.userLogin = localStorage.getItem('loggedUser');
    this.commentSubscribtion = this.commentService.getCommentsByUserLogin(this.userLogin).subscribe((data: Comment[])=>{this.comments = data})
    this.defectSubscribtion = this.defectService.getDefects().subscribe((data:Defect[]) => { this.defects = data})
    
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
          this.router.navigate(['/zarzadzanie-uzytkownik']); 
        })
      })
    }
  }

}
