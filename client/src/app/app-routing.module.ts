import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CommonModule } from '@angular/common';
import { AddDefectComponent } from './components/add-defect/add-defect.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './shared/auth-guard.service';
import { ManageUserGuard } from './shared/manage-user-guard.service';
import { ManagePlaceAdminGuard } from './shared/manage-place-admin-guard.service';
import { ManagePageAdminGuard } from './shared/manage-page-admin-guard.service';

const routes: Routes = [
  {path: 'strona-glowna', component: MainComponent},
  {path: 'logowanie', component: LoginComponent},
  {path: 'rejestracja', component: RegisterComponent},
  {path: 'dodaj-usterke', component: AddDefectComponent, canActivate: [AuthGuard]},
  {path: 'usterki', loadChildren: () => import('./components/defects/defect.module').then(mod => mod.DefectModule)},
  {path: 'pytania', component: QuestionsComponent},
  {
    path: 'zarzadzanie-uzytkownik', 
    loadChildren: () => import('./components/manage-page-user/manage-page-user.module').then(mod => mod.ManagePageUserModule), canActivate: [AuthGuard, ManageUserGuard]
  },
  {
    path: 'zarzadzanie-zarzadca-budynku', 
    loadChildren: () => import('./components/manage-page-place-admin/manage-page-place-admin.module').then(mod => mod.ManagePagePlaceAdminModule), canActivate: [AuthGuard, ManagePlaceAdminGuard]
  },
  {
    path: 'zarzadzanie-administator', 
    loadChildren: () => import('./components/manage-page-admin/manage-page-admin.module').then(mod => mod.ManagePageAdminModule), canActivate: [AuthGuard, ManagePageAdminGuard]
  },
  {path: '', redirectTo: 'strona-glowna', pathMatch: 'full' },
  {
    path: '', 
    loadChildren: () => import('./components/account-details/account-details.module').then(mod => mod.AccountDetailsModule), 
    canActivate: [AuthGuard]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
