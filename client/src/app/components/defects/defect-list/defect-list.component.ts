import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { MarkerService } from 'src/app/shared/services/marker.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css']
})
export class DefectListComponent implements OnInit, OnDestroy {

  defects;
  subscriptionMarker: Subscription;
  subscriptionDefect: Subscription;

  constructor(private defectService: DefectService, private activatedRoute: ActivatedRoute, private markerService: MarkerService) { }

  ngOnInit() {
    
    if(this.markerService.markerID){
      this.subscriptionMarker = this.defectService.getDefectsByMarkerId(this.markerService.markerID).subscribe(
        (response) => {this.defects = response},
        (err) => {console.log('Error result: ' + err)}
      );
      this.markerService.markerID = 0;
    } else{
      this.subscriptionDefect = this.activatedRoute.data.subscribe(data => this.defects = data.defects);
    }

  }

  ngOnDestroy(){
    if(this.subscriptionMarker)
      this.subscriptionMarker.unsubscribe();
    if(this.subscriptionDefect) 
      this.subscriptionDefect.unsubscribe();
  }

}
