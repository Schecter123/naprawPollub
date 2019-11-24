import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/shared/models/place.model';
import { PlaceService } from 'src/app/shared/services/place.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-page-place-admin-add-room',
  templateUrl: './manage-page-place-admin-add-room.component.html',
  styleUrls: ['./manage-page-place-admin-add-room.component.css']
})
export class ManagePagePlaceAdminAddRoomComponent implements OnInit {

  places: Place[];
  placeSubscribtion: Subscription;
  userId: number;
  choosenPlace: string;

  constructor(private placeService: PlaceService) {}

  ngOnInit() {
    this.userId = parseInt(localStorage.getItem('loggedUserId'));
    this.placeSubscribtion = this.placeService.getBuildingAdministatorPlaces(this.userId).subscribe( data => this.places = data);
  }

  onChange($event){
    this.choosenPlace = $event;
    console.log(this.choosenPlace)
  }

}
