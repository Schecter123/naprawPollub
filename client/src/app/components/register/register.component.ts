import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserType } from 'src/app/shared/models/user.model';
import { MessageService } from 'src/app/shared/services/message.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PlaceService } from 'src/app/shared/services/place.service';
import { RegisterService } from 'src/app/shared/services/register.service';
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
    private registerService: RegisterService) { }

  ngOnInit() {
    this.authService.showRegister = false;

    this.subscriptionPlace = this.placeService.getPlaces().subscribe(response => {
      this.places = response;
    });
  }

  ngOnDestroy() {
    this.subscriptionPlace.unsubscribe();
  }

  // changeNameToId(items) {
  //   for (let item of items) {
  //     for (let place of this.places) {
  //       if (item == place.name) {
  //         this.selectedPlacesId.push(place.id);
  //       }
  //     }
  //   }
  // }

  // checkIfUserExist(login) {
  //   if (this.authService.loginExist(login)) {
  //     this.messageService.error('Taki użytkownik już istnieje');
  //     return;
  //   }
  // }

  // addFollows(user) {
  //   for (let i = 0; i < this.selectedPlacesId.length; i++) {
  //     this.follow = {
  //       id: this.follows.length + i,
  //       idPlace: this.selectedPlacesId[i],
  //       idUser: user.id
  //     }
  //     this.follows.push(this.follow);
  //   }
  // }

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
      () => {
        this.messageService.success('Zostałeś zarejestrowany!');
        this.router.navigate(['/usterki/']);
      },
      err => { this.messageService.error('Błąd rejestracji!'); }
    );
  }

}
