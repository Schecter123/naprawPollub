import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from 'src/app/shared/services/place.service';
import { UserType, User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-account-administation',
  templateUrl: './account-administation.component.html',
  styleUrls: ['./account-administation.component.css']
})
export class AccountAdministationComponent implements OnInit {

  @Input() user: User;
  places;
  UserType = UserType;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    console.log(this.user.type);
    console.log(UserType[UserType.PlaceAdministrator])
    this.placeService.getBuildingAdministatorPlaces(this.user.id).subscribe( places => this.places = places);
  }

}
