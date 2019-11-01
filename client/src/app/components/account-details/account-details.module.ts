import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from './account-details.component';
import { RouterModule } from '@angular/router';
import { AccountDetailsResolverService } from './account-details-resolver.service';
import { AccountAdministationComponent } from './account-administation/account-administation.component';

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
  declarations: [AccountDetailsComponent, AccountAdministationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountDetailsModule { }
