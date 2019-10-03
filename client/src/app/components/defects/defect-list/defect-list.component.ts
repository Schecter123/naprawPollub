import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';


@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css']
})
export class DefectListComponent implements OnInit, OnDestroy {

  defects;
  subscription;

  constructor(private defectService: DefectService) { }

  ngOnInit() {
    this.subscription = this.defectService.getDefects().subscribe( response => this.defects = response); 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
