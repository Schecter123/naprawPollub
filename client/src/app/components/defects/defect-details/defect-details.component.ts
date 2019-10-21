import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { DefectType, DefectState } from 'src/app/shared/models/defect.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-defect-details',
  templateUrl: './defect-details.component.html',
  styleUrls: ['./defect-details.component.css']
})
export class DefectDetailsComponent implements OnInit, OnDestroy {

  defect;
  place;
  room;
  editable = false;
  defectDescription;
  //subskrybcje
  defectSubscriber;
  placeSubscriber;
  roomSubscriber;
  subscription;
  //enum
  DefectType = DefectType;
  DefectState = DefectState;

  constructor(private defectService: DefectService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.defectSubscriber= this.activatedRoute.data.subscribe(data => this.defect = data.defect);
    this.placeSubscriber = this.activatedRoute.data.subscribe(data => this.place = data.place);
    this.roomSubscriber = this.activatedRoute.data.subscribe(data => this.room = data.room);
  }

  ngOnDestroy(){
    this.defectSubscriber.unsubscribe();
    this.placeSubscriber.unsubscribe();
    this.roomSubscriber.unsubscribe();
  }

  makeChanges(){
    this.defect.description = this.defectDescription;
    this.defectService.updateDefect(this.defect).subscribe( 
      () => {console.log('done')},
      err => {console.log(err)}
    );
    this.editable = false;
   }
 
   cancelChanges(){
     this.editable = false;
   }

   deleteDefect(){
   if(confirm("Jesteś pewnien, że chcesz usunąć tą usterkę?")){
    this.subscription = this.defectService.deleteDefect(this.defect).subscribe( 
      () => {
        this.router.navigate(['/usterki']);
      },
        err => {console.log(err)}
      );
    
   }
   }


}
