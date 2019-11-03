import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePageUserComponent } from './manage-page-user.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: ManagePageUserComponent}
]

@NgModule({
  declarations: [ManagePageUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagePageUserModule { }
