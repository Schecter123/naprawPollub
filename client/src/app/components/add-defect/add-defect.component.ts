import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefectType, DefectState } from 'src/app/shared/models/defect.model';
import { DefectService } from 'src/app/shared/services/defect.service';
import { RoomService } from 'src/app/shared/services/room.service';
import { PlaceService } from 'src/app/shared/services/place.service';
import { MarkerService } from 'src/app/shared/services/marker.service';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';

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
  
  place;
  type;
  text;
  room;
  user;
  marker;

  currentDate;
  
  imageURL= "";

  constructor(private defectService: DefectService, private roomService: RoomService, private placeService: PlaceService, private markerService: MarkerService, private router: Router) { }

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
    this.subscriberMarker = this.markerService.getMarkers().subscribe( markers => {
      this.markers = markers;
    })  
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
        this.specifiedRooms.push(room);
      }
    }

    for(let marker of this.markers){
      if(selectedPlace.id == marker.idPlace){
        this.marker = marker;
      }
    }
    console.log(this.marker);
  }

  onFileSelected(selectedFile){
    this.selectedFile = selectedFile.target.files[0];
    console.log(this.selectedFile);
  }

  addDefect(){
    this.defectService.createDefect({
    defectType: parseInt(this.type)+1,
    idPlace: this.place.id,
    idUser: 1,
    idRoom: this.room.id,
    idMarker: 2,
    defectState: 1,
    description: this.text,
    date: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en'),
    photoURL: ''
    }).subscribe( 
      () => {this.router.navigate(['/usterki/']);},
      err => {console.log(err)}
    );  
    
  }


}
