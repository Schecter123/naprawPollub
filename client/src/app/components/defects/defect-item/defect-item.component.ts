import { Component, OnInit, Input } from '@angular/core';
import { DefectType } from 'src/app/shared/models/defect.model';

@Component({
  selector: 'app-defect-item',
  templateUrl: './defect-item.component.html',
  styleUrls: ['./defect-item.component.css']
})
export class DefectItemComponent implements OnInit {

  @Input() defect;
  DefectType = DefectType;

  constructor() { }

  ngOnInit() {
    console.log(this.defect.defectType)
  }

}
