import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DefectType } from 'src/app/shared/models/defect.model';
import { DefectService } from 'src/app/shared/services/defect.service';


@Component({
  selector: 'app-defect-item',
  templateUrl: './defect-item.component.html',
  styleUrls: ['./defect-item.component.css']
})
export class DefectItemComponent implements OnInit, OnDestroy {

  @Input() defect;
  room;
  place;
  subscription;

  DefectType = DefectType;

  constructor(private defectService: DefectService) { }

  ngOnInit() {
    
  }

  ngOnDestroy(){
  
  }
}
