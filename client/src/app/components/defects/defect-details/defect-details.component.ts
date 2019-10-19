import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { DefectType, DefectState } from 'src/app/shared/models/defect.model';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private defectService: DefectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => this.defect = data.defect);
    this.activatedRoute.data.subscribe(data => this.place = data.place);
    this.activatedRoute.data.subscribe(data => this.room = data.room);
  }

  ngOnDestroy(){
  }

  makeChanges(){
    this.defect.description = this.defectDescription;
    this.editable = false;
   }
 
   cancelChanges(){
     this.editable = false;
   }


}
