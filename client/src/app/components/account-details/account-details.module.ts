import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from './account-details.component';
import { RouterModule } from '@angular/router';
import { AccountDetailsResolverService } from './account-details-resolver.service';
import { AccountAdministationComponent } from './account-administation/account-administation.component';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';
import { FormsModule } from '@angular/forms';

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
  declarations: [AccountDetailsComponent, AccountAdministationComponent, AccountChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AccountDetailsModule { }
