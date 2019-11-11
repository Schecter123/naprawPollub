import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FollowService } from 'src/app/shared/services/follow.service';
import { Follow } from 'src/app/shared/models/follow.model';
import { Subscription } from 'rxjs';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Place } from 'src/app/shared/models/place.model';

@Component({
  selector: 'app-account-follows',
  templateUrl: './account-follows.component.html',
  styleUrls: ['./account-follows.component.css']
})
export class AccountFollowsComponent implements OnInit, OnDestroy {

  @Input() user;
  follows: Follow[];
  places: Place[];
  unfollowPlaces: Place[];
  selectedPlaces: string[];
  subscribtionFollows: Subscription;
  subscribtionPlaces: Subscription;
  subscribtionNoFollowPlaces: Subscription;

  constructor(private followService: FollowService, private placeService: PlaceService) { }

  ngOnInit() {
    this.subscribtionFollows = this.followService.getFollowsByUserId(this.user.id).subscribe(
      (data: Follow[]) => { this.follows = data },
      (error) => { console.log(error) }
    )
    this.subscribtionPlaces = this.placeService.getPlaces().subscribe( (data:Place[]) => this.places = data)
    this.subscribtionNoFollowPlaces = this.followService.getPlacesWhichAreNotFollowedByUser(this.user.id).subscribe( (data:Place[]) => { this.unfollowPlaces = data})
  }

  ngOnDestroy(){
    this.subscribtionFollows.unsubscribe();
    this.subscribtionPlaces.unsubscribe();
  }

  addFollowButtonClick(){
    console.log(this.selectedPlaces)
    for (let i = 0; i < this.selectedPlaces.length; i++) {
      this.followService.addFollow({
        id: null,
        idPlace: parseInt(this.selectedPlaces[i]),
        idUser: this.user.id
      }).subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
        }
      );
    }
  }

}
