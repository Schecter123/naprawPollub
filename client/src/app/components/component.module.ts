import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { DefectModule } from './defects/defect.module';

const Components = [
  NavigationComponent, 
  QuestionsComponent, 
  LoginComponent, 
  RegisterComponent, 
  FooterComponent, 
  MainComponent, 
];


@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    FormsModule,
    DefectModule
  ],
  exports: [
    Components,
    FormsModule
  ]
})
export class ComponentModule { }
