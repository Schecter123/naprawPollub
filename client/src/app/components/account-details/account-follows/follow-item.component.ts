import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Follow } from 'src/app/shared/models/follow.model';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Subscription, Subject } from 'rxjs';
import { Place } from 'src/app/shared/models/place.model';
import { FollowService } from 'src/app/shared/services/follow.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-follow-item',
  template: `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  {{place?.name}}
  <button type="button" class="btn badge badge-danger" (click)="deleteFollow()">x</button>
  </li>
  `,
  styles: []
})
export class FollowItemComponent implements OnInit, OnDestroy {

  @Input() follow: Follow;
  @Input() user: User;
  place: Place;
  placeSubscribtion: Subscription;
  followSubscribtion: Subscription;

  constructor(private placeService: PlaceService, private followService: FollowService, private router: Router) { }

  ngOnInit() {
    this.placeSubscribtion = this.placeService.getPlacesByPlaceId(this.follow.idPlace).subscribe( data => this.place = data[0]);
  }

  deleteFollow(){
    if(confirm("Jesteś pewnien, że chcesz usunąć tą obserwację?")){
      this.followSubscribtion = this.followService.deleteFollow(this.follow.id).subscribe( () => {
        this.router.navigateByUrl('/pytania', { skipLocationChange: true }).then(() => {
          this.router.navigate([`${this.user.login}`]);
      }); 
    });  
   }
  }

  ngOnDestroy(){
    this.placeSubscribtion.unsubscribe();
  }
}
