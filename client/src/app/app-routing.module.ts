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

const routes: Routes = [
  {path: 'strona-glowna', component: MainComponent},
  {path: 'logowanie', component: LoginComponent},
  {path: 'rejestracja', component: RegisterComponent},
  {path: 'dodaj-usterke', component: AddDefectComponent, canActivate: [AuthGuard]},
  {path: 'usterki', loadChildren: () => import('./components/defects/defect.module').then(mod => mod.DefectModule)},
  {path: 'pytania', component: QuestionsComponent},
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
