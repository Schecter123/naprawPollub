import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, Inject } from '@angular/core';
import { DefectType, DefectState } from 'src/app/shared/models/defect.model';
import { Subscription} from 'rxjs';
import { PlaceService } from 'src/app/shared/services/place.service';
import { RoomService } from 'src/app/shared/services/room.service';
import { UploadImageService } from 'src/app/shared/services/upload-image.service';
import { RatingService } from 'src/app/shared/services/rating.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-defect-item',
  templateUrl: './defect-item.component.html',
  styleUrls: ['./defect-item.component.css']
})
export class DefectItemComponent implements OnInit, OnDestroy {

  @Input() defect;
  rooms;
  places;
  image;
  rating;
  ratingUserList;
  subscriptionRoom: Subscription;
  subscriptionPlace: Subscription;
  subscriptionRating: Subscription;
  subscriptionUserRating: Subscription;

  DefectType = DefectType;
  DefectState = DefectState;

  constructor(private placeService: PlaceService, private roomService: RoomService, private uploadImageService: UploadImageService, private ratingService: RatingService, private authService: AuthService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.subscriptionRoom = this.roomService.getRooms().subscribe(response => {
      this.rooms = response;
    });

    this.subscriptionPlace = this.placeService.getPlaces().subscribe(response => {
      this.places = response;
    });

    this.subscriptionRating = this.ratingService.getRating(this.defect.id).subscribe( response => {
      this.rating = response
    })
    if(this.authService.isLoggedIn()){
      this.subscriptionUserRating = this.ratingService.getUserRating(parseInt(localStorage.getItem('loggedUserId'))).subscribe( response => {
        this.ratingUserList = response
      })
    } 
  }

  ngOnDestroy(){
    this.subscriptionRoom.unsubscribe();
    this.subscriptionPlace.unsubscribe();
    this.subscriptionRating.unsubscribe();
    if(this.subscriptionUserRating){
      this.subscriptionUserRating.unsubscribe();
    }
  }

  addPoint(point){
    let userId = parseInt(localStorage.getItem('loggedUserId'));
    if(this.ratingUserList){
      for(let rate of this.ratingUserList){
        if(rate.idUser == userId && rate.idDefect == this.defect.id)
        {
          this.toastrService.error('Juz oddałeś swój głos')
          return;
        }
      }
    }
    
    this.ratingService.addRating({
      value: point,
      idUser: userId,
      idDefect: this.defect.id
    }).subscribe(
      () => {console.log("ok"); this.ngOnInit()},
      (error) => console.log(error)
    )
  }

  substractPoint(point){
    let userId = parseInt(localStorage.getItem('loggedUserId'));
    if(this.ratingUserList){
      for(let rate of this.ratingUserList){
        if(rate.idUser == userId && rate.idDefect == this.defect.id)
        {
          this.toastrService.error('Juz oddałeś swój głos')
          return;
        }
      }

    }
    this.ratingService.addRating({
      value: point,
      idUser: userId,
      idDefect: this.defect.id
    }).subscribe(
      () => {console.log("ok"); this.ngOnInit()},
      (error) => console.log(error)
    )
  }
}
