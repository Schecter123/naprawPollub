import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from './account-details.component';
import { RouterModule } from '@angular/router';
import { AccountDetailsResolverService } from './account-details-resolver.service';
import { AccountAdministationComponent } from './account-administation/account-administation.component';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';
import { FormsModule } from '@angular/forms';
import { AccountFollowsComponent } from './account-follows/account-follows.component';
import { FollowItemComponent } from './account-follows/follow-item.component';

const routes = [
  {
    path: ':login', 
    component: AccountDetailsComponent,
    resolve: {
      user: AccountDetailsResolverService
    },
  }
 
]


@NgModule({
  declarations: [AccountDetailsComponent, AccountAdministationComponent, AccountChangePasswordComponent, AccountFollowsComponent, FollowItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FormsModule
  ]
})
export class AccountDetailsModule { }
