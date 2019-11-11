import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DefectType, DefectState } from 'src/app/shared/models/defect.model';
import { Subscription} from 'rxjs';
import { PlaceService } from 'src/app/shared/services/place.service';
import { RoomService } from 'src/app/shared/services/room.service';
import { UploadImageService } from 'src/app/shared/services/upload-image.service';


@Component({
  selector: 'app-defect-item',
  templateUrl: './defect-item.component.html',
  styleUrls: ['./defect-item.component.css']
})
export class DefectItemComponent implements OnInit, OnDestroy {

  @Input() defect;
  rooms;
  places;
  image;
  subscriptionRoom: Subscription;
  subscriptionPlace: Subscription;

  DefectType = DefectType;
  DefectState = DefectState;

  constructor(private placeService: PlaceService, private roomService: RoomService, private uploadImageService: UploadImageService) { }

  ngOnInit() {
    this.subscriptionRoom = this.roomService.getRooms().subscribe(response => {
      this.rooms = response;
    });

    this.subscriptionPlace = this.placeService.getPlaces().subscribe(response => {
      this.places = response;
    });
  }

  ngOnDestroy(){
    this.subscriptionRoom.unsubscribe();
    this.subscriptionPlace.unsubscribe();
  }
}
