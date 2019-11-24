import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { CommentService } from 'src/app/shared/services/comment.service';
import { DefectService } from 'src/app/shared/services/defect.service';
import { Defect } from 'src/app/shared/models/defect.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  subscriberComments;
  defect: Defect
  comments;

  constructor(private commentService: CommentService, private defectService: DefectService) { }

  ngOnInit() {
    this.defect = this.defectService.defect;
    this.subscriberComments = this.commentService.getCommentsByDefectId(this.defect.id).subscribe( data => {
      this.comments = data;
    })
   }

   ngOnDestroy() {
     this.subscriberComments.unsubscribe();
   }

  }




