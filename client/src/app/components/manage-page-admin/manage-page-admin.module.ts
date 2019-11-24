import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { ManagePageAdminComponent } from './manage-page-admin.component';
import { ManagePageAdminDefectsComponent } from './manage-page-admin-defects/manage-page-admin-defects.component';
import { ManagePageAdminCommentsComponent } from './manage-page-admin-comments/manage-page-admin-comments.component';
import { ChangeDefectStateComponent } from './manage-page-admin-defects/change-defect-state/change-defect-state.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

const routes = [
  {path: '', component: ManagePageAdminComponent},
  {path: 'usterki', component: ManagePageAdminDefectsComponent},
  {path: 'komentarze', component: ManagePageAdminCommentsComponent}
]

@NgModule({
  declarations: [ManagePageAdminComponent, ManagePageAdminDefectsComponent, ManagePageAdminCommentsComponent, ChangeDefectStateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [ChangeDefectStateComponent]
})
export class ManagePageAdminModule { }
