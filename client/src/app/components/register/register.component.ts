import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserType } from 'src/app/shared/models/user.model';
import { MessageService } from 'src/app/shared/services/message.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { RegisterService } from 'src/app/shared/services/register.service';
import { FollowService } from 'src/app/shared/services/follow.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  places;
  selectedPlaces;
  selectedPlacesId = [];
  login: string;
  name: string;
  surname: string;
  password: string;
  email: string;
  users;
  user;
  UserType = UserType;
  subscriptionPlace: Subscription;

  constructor(private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private placeService: PlaceService,
    private registerService: RegisterService,
    private followService: FollowService) {
  }

  ngOnInit() {
    this.authService.showLogin = true;
    this.authService.showRegister = false;

    this.subscriptionPlace = this.placeService.getPlaces().subscribe(response => {
      this.places = response;
    });
  }

  ngOnDestroy() {
    this.subscriptionPlace.unsubscribe();
  }

  addUser() {
    this.registerService.registerUser({
      id: null,
      type: UserType.Standard,
      login: this.login,
      password: this.password,
      email: this.email,
      name: this.name,
      surname: this.surname
    }).subscribe(
      (result) => {
        this.messageService.success('Zostałeś zarejestrowany!');
        this.addFollows(result);
        this.router.navigate(['/usterki/']);

      },
      err => { this.messageService.error('Błąd rejestracji!'); }
    );
  }

  addFollows(result) {
    var idUsr = result.lastUserId[0].lastIdUser;
    for (let item of this.selectedPlaces) {
      for (let place of this.places) {
        if (item == place.name) {
          this.selectedPlacesId.push(place.id);
        }
      }
    }

    for (let i = 0; i < this.selectedPlacesId.length; i++) {
      this.followService.addFollow({
        id: null,
        idPlace: this.selectedPlacesId[i],
        idUser: idUsr
      }).subscribe(
        res => {
        },
        err => {
        }
      );
    }
  }

}
