import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Defect, DefectState } from 'src/app/shared/models/defect.model';

export interface DialogData {
  defect: Defect;
}


@Component({
  selector: 'app-change-defect-state',
  templateUrl: './change-defect-state.component.html',
  styleUrls: ['./change-defect-state.component.css']
})
export class ChangeDefectStateComponent implements OnInit {

  DefectState = DefectState;
  state;
  
  constructor(
    public dialogRef: MatDialogRef<ChangeDefectStateComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData) {}

  
    onAnulujClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.state = DefectState[DefectState[this.data.defect.defectState]]
  }

}
