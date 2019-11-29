import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { ManagePageAdminComponent } from './manage-page-admin.component';
import { ManagePageAdminDefectsComponent } from './manage-page-admin-defects/manage-page-admin-defects.component';
import { ManagePageAdminCommentsComponent } from './manage-page-admin-comments/manage-page-admin-comments.component';
import { ManagePageAdminAddPlaceAdminComponent } from './manage-page-admin-add-place-admin/manage-page-admin-add-place-admin.component';



const routes = [
  {path: '', component: ManagePageAdminComponent},
  {path: 'usterki', component: ManagePageAdminDefectsComponent},
  {path: 'komentarze', component: ManagePageAdminCommentsComponent},
  {path: 'dodaj-zarzadce', component: ManagePageAdminAddPlaceAdminComponent}
]

@NgModule({
  declarations: [ManagePageAdminComponent, ManagePageAdminDefectsComponent, ManagePageAdminCommentsComponent, ManagePageAdminAddPlaceAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
  ]
})
export class ManagePageAdminModule { }
