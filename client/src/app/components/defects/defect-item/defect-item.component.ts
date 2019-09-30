import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-defect-item',
  templateUrl: './defect-item.component.html',
  styleUrls: ['./defect-item.component.css']
})
export class DefectItemComponent implements OnInit {

  @Input() defect;

  constructor() { }

  ngOnInit() {
  }

}
