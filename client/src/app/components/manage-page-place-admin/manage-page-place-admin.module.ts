import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePagePlaceAdminComponent } from './manage-page-place-admin.component';
import { RouterModule } from '@angular/router';
import { ManagePagePlaceAdminCommentsComponent } from './manage-page-place-admin-comments/manage-page-place-admin-comments.component';
import { ManagePagePlaceAdminDefectsComponent } from './manage-page-place-admin-defects/manage-page-place-admin-defects.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { ManagePagePlaceAdminAddRoomComponent } from './manage-page-place-admin-add-room/manage-page-place-admin-add-room.component';

const routes = [
  {path: '', component: ManagePagePlaceAdminComponent},
  {path: 'usterki', component: ManagePagePlaceAdminDefectsComponent},
  {path: 'komentarze', component: ManagePagePlaceAdminCommentsComponent},
  {path: 'dodaj-pokoj', component: ManagePagePlaceAdminAddRoomComponent}
]

@NgModule({
  declarations: [ManagePagePlaceAdminComponent, ManagePagePlaceAdminCommentsComponent, ManagePagePlaceAdminDefectsComponent, ManagePagePlaceAdminAddRoomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule
  ]
})
export class ManagePagePlaceAdminModule { }
