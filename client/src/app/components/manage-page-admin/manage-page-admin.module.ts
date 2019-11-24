import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { ManagePageAdminComponent } from './manage-page-admin.component';
import { ManagePageAdminDefectsComponent } from './manage-page-admin-defects/manage-page-admin-defects.component';
import { ManagePageAdminCommentsComponent } from './manage-page-admin-comments/manage-page-admin-comments.component';



const routes = [
  {path: '', component: ManagePageAdminComponent},
  {path: 'usterki', component: ManagePageAdminDefectsComponent},
  {path: 'komentarze', component: ManagePageAdminCommentsComponent}
]

@NgModule({
  declarations: [ManagePageAdminComponent, ManagePageAdminDefectsComponent, ManagePageAdminCommentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
  ]
})
export class ManagePageAdminModule { }
