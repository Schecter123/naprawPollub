import { Component, OnInit } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.css']
})
export class DefectsComponent implements OnInit {

  defects;

  constructor(private defectService: DefectService) { }

  ngOnInit() {
    this.defectService.getDefects().subscribe( response => this.defects = response)
  }

}
