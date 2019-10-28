import { Component, OnInit, OnDestroy, Output, ViewChild } from '@angular/core';
import { DefectType, DefectState, Defect } from 'src/app/shared/models/defect.model';
import { DefectService } from 'src/app/shared/services/defect.service';
import { RoomService } from 'src/app/shared/services/room.service';
import { PlaceService } from 'src/app/shared/services/place.service';
import { MarkerService } from 'src/app/shared/services/marker.service';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Place } from 'src/app/shared/models/place.model';
import { Marker } from 'src/app/shared/models/marker.model';


@Component({
  selector: 'app-add-defect',
  templateUrl: './add-defect.component.html',
  styleUrls: ['./add-defect.component.css']
})
export class AddDefectComponent implements OnInit, OnDestroy {

  subscriberPlaces;
  subscriberRooms;
  subscriberDefects;
  subscriberMarker;

  places;
  rooms;
  specifiedRooms = [];
  defects;
  markers;
  selectedFile: File = null;
  DefectType = DefectType;
  DefectState = DefectState;
  
  place: Place;
  type: string;
  text: string;
  room: number = -1; //domyślna wartość pokoju na "Wybierz salę"
  user;
  marker: Marker;
  imageURL= "";

  userIsAddingDefect = true; //przełączanie trybu mapy dla osoby dodającej usterke
  markerLatitude: number;
  markerLongitude: number;
  markerIDAddedByUser;

  constructor(private defectService: DefectService, private roomService: RoomService, private placeService: PlaceService, private markerService: MarkerService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.subscriberPlaces = this.placeService.getPlaces().subscribe( places => {
      this.places = places;
    });
    this.subscriberRooms = this.roomService.getRooms().subscribe( rooms => {
      this.rooms = rooms;
    });
    this.subscriberDefects = this.defectService.getDefects().subscribe( defects => {
      this.defects = defects;
    });
    this.subscriberMarker = this.markerService.getAllMarkers().subscribe( markers => {
      this.markers = markers;
    });
   
    
  }

  ngOnDestroy(){
    this.subscriberPlaces.unsubscribe();
    this.subscriberRooms.unsubscribe();
    this.subscriberDefects.unsubscribe();
    this.subscriberMarker.unsubscribe();
  }
  
  onChange(selectedPlace){
    this.specifiedRooms = [];
    this.marker = null;
    for(let room of this.rooms){
      if(selectedPlace.id == this.places[room.idPlace-1].id){
        this.specifiedRooms.push(room); //przypisywanie sali do wybranego miejsca
      }
    }
    for(let marker of this.markers){
      if(selectedPlace.id == marker.idPlace){
        this.marker = marker; //przypisywanie markerów na mapie do wybranego miejsca
      }
    }
    this.room=-1; //ustawienie na "Wybierz salę", po każdej zmianie pokoju
  }

  onFileSelected(selectedFile){
    this.selectedFile = selectedFile.target.files[0];
    console.log(this.selectedFile);
  }

  chceckIfUserSelectedARoom(){ //Jeżeli użytkownik nie wybrał sali formularz nie może przejść dalej
    if(this.room==-1 && this.place.id!=17){
      this.toastrService.error("Musisz wybrać salę"); 
      return;
    }
  }

  addDefectButtonClick(){
    this.chceckIfUserSelectedARoom();
    if(this.place.id!=17) //Id miejsca, do którego nie pojawia się mapa
      this.addDefect(this.place.id, this.room, this.marker.id, this.text)
    else
        this.addMarker(this.place.id, this.text);
  }


  addMarker(place, description){
    this.markerLatitude = this.markerService.markerLatitudeAndLongitude[0];
    this.markerLongitude = this.markerService.markerLatitudeAndLongitude[1];
    this.markerService.createMarker({
      latitude: this.markerLatitude,
      longitude: this.markerLongitude,
      idPlace: 17,
      info: 'Szczegóły usterki'
    }).subscribe(
      data => {
        this.markerIDAddedByUser = data[0].lastIdMarker;
        this.addDefect(place, null, this.markerIDAddedByUser, description);
      },
      error => {console.log(error)}
    )
  }

  addDefect(place, room, marker, description){
    this.defectService.createDefect({
      defectType: parseInt(this.type)+1,
      idPlace: place,
      idUser: 1,
      idRoom: room,
      idMarker: marker,
      defectState: 1,
      description: description,
      date: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en'),
      photoURL: ''
      }).subscribe( 
        (data) => {
          console.log(data)
          this.router.navigate(['/usterki/']);
        },
        err => {console.log(err)}
      );  
  }

}
