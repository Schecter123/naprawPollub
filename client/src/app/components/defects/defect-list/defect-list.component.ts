import { Component, OnInit, Input } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';

@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css']
})
export class DefectListComponent implements OnInit {

  defects;

  constructor(private defectService: DefectService) { }

  ngOnInit() {
    this.defectService.getDefects().subscribe( response => this.defects = response);
  }

}
