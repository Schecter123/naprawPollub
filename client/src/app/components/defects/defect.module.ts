import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefectListComponent } from './defect-list/defect-list.component';
import { DefectItemComponent } from './defect-item/defect-item.component';
import { DefectFilterComponent } from './defect-filter/defect-filter.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DefectsComponent } from './defects.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: DefectsComponent}
]

@NgModule({
  declarations: [
    DefectsComponent,
    DefectListComponent, 
    DefectItemComponent, 
    DefectFilterComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DefectsComponent,
    DefectListComponent, 
    DefectItemComponent, 
    DefectFilterComponent
  ]
})
export class DefectModule { }
