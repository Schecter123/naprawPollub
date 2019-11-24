import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePageUserComponent } from './manage-page-user.component';
import { RouterModule } from '@angular/router';
import { ManagePageUserDefectsComponent } from './manage-page-user-defects/manage-page-user-defects.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { ManagePageUserCommentsComponent } from './manage-page-user-comments/manage-page-user-comments.component';

const routes = [
  {path: '', component: ManagePageUserComponent},
  {path: 'usterki', component: ManagePageUserDefectsComponent},
  {path: 'komentarze', component: ManagePageUserCommentsComponent}
]

@NgModule({
  declarations: [ManagePageUserComponent, ManagePageUserDefectsComponent, ManagePageUserCommentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
  ]
})
export class ManagePageUserModule { }
