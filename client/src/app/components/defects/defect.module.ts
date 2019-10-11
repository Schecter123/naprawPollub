import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefectListComponent } from './defect-list/defect-list.component';
import { DefectItemComponent } from './defect-item/defect-item.component';
import { DefectFilterComponent } from './defect-filter/defect-filter.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DefectsComponent } from './defects.component';
import { RouterModule } from '@angular/router';
import { DefectDetailsComponent } from './defect-details/defect-details.component';
import { FormsModule } from '@angular/forms';
import { DefectCommentComponent } from './defect-comment/defect-comment.component';

const routes = [
  {path: '', component: DefectsComponent},
  {path: 'defect', component: DefectDetailsComponent}
]

@NgModule({
  declarations: [
    DefectsComponent,
    DefectListComponent, 
    DefectItemComponent, 
    DefectFilterComponent, DefectDetailsComponent, DefectCommentComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    DefectsComponent,
    DefectListComponent, 
    DefectItemComponent, 
    DefectFilterComponent,
    DefectDetailsComponent
  ]
})
export class DefectModule { }
