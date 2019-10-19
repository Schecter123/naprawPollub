import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefectType, DefectState } from 'src/app/shared/models/defect.model';
import { DefectService } from 'src/app/shared/services/defect.service';
import { RoomService } from 'src/app/shared/services/room.service';
import { PlaceService } from 'src/app/shared/services/place.service';

@Component({
  selector: 'app-add-defect',
  templateUrl: './add-defect.component.html',
  styleUrls: ['./add-defect.component.css']
})
export class AddDefectComponent implements OnInit, OnDestroy {

  subscriberPlaces;
  subscriberRooms;
  subscriberDefects;

  places;
  rooms;
  specifiedRooms = [];
  defects;
  DefectType = DefectType;
  DefectState = DefectState;
  
  place;
  type;
  text;
  room;
  user;
  defect;

  currentDate;
  
  constructor(private defectService: DefectService, private roomService: RoomService, private placeService: PlaceService) { }

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
  }
  
  ngOnDestroy(){
    this.subscriberPlaces.unsubscribe();
    this.subscriberRooms.unsubscribe();
    this.subscriberDefects.unsubscribe();
  }
  
  onChange(selectedPlace){
  
    for(let room of this.rooms){
      if(selectedPlace.id == this.places[room.idPlace-1].id){
        this.specifiedRooms.push(room);
        console.log(this.specifiedRooms);
      }
    }
  }

  addDefect(){

    
  }


}
