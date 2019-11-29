import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Place } from 'src/app/shared/models/place.model';
import { PlaceService } from 'src/app/shared/services/place.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-page-admin-add-place-admin',
  templateUrl: './manage-page-admin-add-place-admin.component.html',
  styleUrls: ['./manage-page-admin-add-place-admin.component.css']
})
export class ManagePageAdminAddPlaceAdminComponent implements OnInit {
  
  choosenUser: User;
  choosenPlace: Place;

  subscriptionUsers: Subscription;
  subscriptionPlaces: Subscription;
  users: User[];
  places: Place[];

  constructor(private userService: UserService, private placeService: PlaceService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.subscriptionUsers = this.userService.getUsers().subscribe( (data: User[]) => this.users = data);
    this.subscriptionPlaces = this.placeService.getPlacesWithoutAdmin().subscribe((data: Place[]) => this.places = data);
  }

  onChangeUser($event){
    this.choosenUser = $event;
    console.log(this.choosenUser)
  }

  onChangePlace($event){
    this.choosenPlace = $event;
    console.log(this.choosenPlace)
  }

  changeType(){
    this.userService.changeUserType(this.choosenUser.login, { idPlace: this.choosenPlace.id}).subscribe(
      () => this.toastrService.success('Dodano zarządce!'),
      () => (this.toastrService.error('Coś poszło nie tak :('))
    )
  }

}
