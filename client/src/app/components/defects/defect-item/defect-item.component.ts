import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DefectType, Defect } from 'src/app/shared/models/defect.model';
import { DefectService } from 'src/app/shared/services/defect.service';
import { Subscription} from 'rxjs';


@Component({
  selector: 'app-defect-item',
  templateUrl: './defect-item.component.html',
  styleUrls: ['./defect-item.component.css']
})
export class DefectItemComponent implements OnInit, OnDestroy {

  @Input() defect;
  room;
  place;
  subscriptionRoom: Subscription;
  subscriptionPlace: Subscription;

  DefectType = DefectType;

  constructor(private defectService: DefectService) { }

  ngOnInit() {
    this.subscriptionRoom = this.defectService.getParticularDefectRoom(this.defect.id).subscribe(response => {
      this.room = response;
      this.room = this.room.name;
    });

    this.subscriptionPlace = this.defectService.getParticularDefectPlace(this.defect.id).subscribe(response => {
      this.place = response;
      this.place = this.place.name;
    });
  }

  ngOnDestroy(){
    this.subscriptionRoom.unsubscribe();
    this.subscriptionPlace.unsubscribe();
  }
}
