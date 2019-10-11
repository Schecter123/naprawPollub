import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { DefectType, DefectState } from 'src/app/shared/models/defect.model';
@Component({
  selector: 'app-defect-details',
  templateUrl: './defect-details.component.html',
  styleUrls: ['./defect-details.component.css']
})
export class DefectDetailsComponent implements OnInit, OnDestroy {

  defectId = 1;
  defect;
  place;
  room;
  editable = false;
  defectDescription;
  //subskrybcje
  defectSubscriber;
  placeSubscriber;
  roomSubscriber;
  //enum
  DefectType = DefectType;
  DefectState = DefectState;

  constructor(private defectService: DefectService) { }

  ngOnInit() {
    this.defectSubscriber = this.defectService.getParticularDefect(this.defectId).subscribe( response => this.defect = response);
    this.placeSubscriber = this.defectService.getParticularDefectPlace(this.defectId).subscribe( response => this.place = response);
    this.roomSubscriber = this.defectService.getParticularDefectRoom(this.defectId).subscribe( response => this.room = response);
  }

  ngOnDestroy(){
    this.defectSubscriber.unsubscribe();
    this.placeSubscriber.unsubscribe();
    this.roomSubscriber.unsubscribe();
  }

  makeChanges(){
    this.defect.description = this.defectDescription;
    this.editable = false;
   }
 
   cancelChanges(){
     this.editable = false;
   }


}
