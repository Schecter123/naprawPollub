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
import { DefectResolverService } from './defect-resolver.service';
import { PlaceResolverService } from './place-resolver.service';
import { RoomResolverService } from './room-resolver.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DefectListResolverService } from './defect-list-resolver.service';
import { UserResolverService } from './user-resolver.service';

const routes = [
  {
    path: '', 
    component: DefectsComponent,
    resolve: {
      defects: DefectListResolverService
    }
  },
  {
    path: ':id', 
    component: DefectDetailsComponent,
    resolve: {
      defect: DefectResolverService,
      place: PlaceResolverService,
      room: RoomResolverService,
      user: UserResolverService
    }
  }
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
    FormsModule,
    MatToolbarModule
  ],
  providers: [ DefectResolverService, PlaceResolverService, RoomResolverService, DefectListResolverService, UserResolverService ],
  exports: [
    DefectsComponent,
    DefectListComponent, 
    DefectItemComponent, 
    DefectFilterComponent,
    DefectDetailsComponent
  ]
})
export class DefectModule { }
