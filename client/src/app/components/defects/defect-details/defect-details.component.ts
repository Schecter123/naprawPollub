import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { DefectType, DefectState, Defect } from 'src/app/shared/models/defect.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { UploadImageService } from 'src/app/shared/services/upload-image.service';
import { Place } from 'src/app/shared/models/place.model';
import { Room } from 'src/app/shared/models/room.model';
import { User } from 'src/app/shared/models/user.model';
import { Image } from 'src/app/shared/models/image.model';
import { Subscription } from 'rxjs';
import { element, browser } from 'protractor';

@Component({
  selector: 'app-defect-details',
  templateUrl: './defect-details.component.html',
  styleUrls: ['./defect-details.component.css']
})
export class DefectDetailsComponent implements OnInit, OnDestroy {

  defect: Defect;
  place: Place;
  room: Room;
  user: User;
  image: Image;
  imageSource: string;
  editable = false;
  defectDescription: string;
  loggedUser;
  photoURL;
  errorHandlerIsCalled: boolean = false;

  //subskrybcje
  defectSubscriber: Subscription;
  placeSubscriber: Subscription;
  roomSubscriber: Subscription;
  userSubscriber: Subscription;
  subscriptionImage: Subscription;
  subscription: Subscription;
  
  //enum
  DefectType = DefectType;
  DefectState = DefectState;

  constructor(private defectService: DefectService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService, private uploadImageService: UploadImageService) { }

  ngOnInit() {
    this.defectSubscriber= this.activatedRoute.data.subscribe(data => {
      this.defect = data.defect
      this.defectService.defect = this.defect;
    });
    this.placeSubscriber = this.activatedRoute.data.subscribe(data => this.place = data.place);
    this.roomSubscriber = this.activatedRoute.data.subscribe(data => this.room = data.room);
    this.userSubscriber = this.activatedRoute.data.subscribe(data => { this.user = data.user[0]; });
    this.loggedUser = localStorage.getItem("loggedUser");
    this.subscriptionImage = this.uploadImageService.getFileByDefectId(this.defect.id).subscribe(
      (data) => { 
            this.image = data[0]
            if(this.image){
              this.imageSource = '/assets/images_upload/' + this.image.id + '.' + this.image.type;
            }
              
      }
    )
  }

  ngOnDestroy(){
    this.defectSubscriber.unsubscribe();
    this.placeSubscriber.unsubscribe();
    this.roomSubscriber.unsubscribe();
    this.userSubscriber.unsubscribe();
    this.subscriptionImage.unsubscribe();
    if(!this.errorHandlerIsCalled){
      localStorage.removeItem("photo"+this.defect.id);
    }
  }

  errorHandler(event){
    this.errorHandlerIsCalled = true;
    this.photoURL = localStorage.getItem("photo"+this.defect.id);
    event.target.src = this.photoURL;
  }

  makeChanges(){
    this.defect.description = this.defectDescription;
    this.defectService.updateDefect(this.defect).subscribe( 
      () => {},
      err => {console.log(err)}
    );
    this.editable = false;
   }
 
   cancelChanges(){
     this.editable = false;
   }

   deleteDefect(){
   if(confirm("Jesteś pewnien, że chcesz usunąć tą usterkę?")){
    this.subscription = this.defectService.deleteDefect(this.defect).subscribe( 
      () => {
        this.router.navigate(['/usterki']);
      },
        err => {console.log(err)}
      );
    }
   }


}
