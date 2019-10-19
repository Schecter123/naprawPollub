import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { MarkerService } from 'src/app/shared/services/marker.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css']
})
export class DefectListComponent implements OnInit, OnDestroy {

  defects;
  subscription;

  constructor(private defectService: DefectService, private activatedRoute: ActivatedRoute, private markerService: MarkerService) { }

  ngOnInit() {
    
    if(this.markerService.markerID){
      this.subscription = this.defectService.getDefectsByMarkerId(this.markerService.markerID).subscribe(
        (response) => {this.defects = response},
        (err) => {console.log('Error result: ' + err)}
      );
      
      this.markerService.markerID = 0;
    } else{
      this.subscription = this.activatedRoute.data.subscribe(data => this.defects = data.defects);
    }
  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
