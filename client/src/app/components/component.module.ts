import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { DefectsComponent } from './defects/defects.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavigationComponent, 
    DefectsComponent, 
    QuestionsComponent, 
    LoginComponent, 
    RegisterComponent, 
    FooterComponent, 
    MainComponent
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    NavigationComponent,
    DefectsComponent, 
    QuestionsComponent, 
    LoginComponent, 
    RegisterComponent, 
    FooterComponent, 
    MainComponent
  ]
})
export class ComponentModule { }
