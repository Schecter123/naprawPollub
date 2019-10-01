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
import { DefectListComponent } from './defects/defect-list/defect-list.component';
import { DefectItemComponent } from './defects/defect-item/defect-item.component';
import { DefectFilterComponent } from './defects/defect-filter/defect-filter.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const Components = [
  NavigationComponent, 
  DefectsComponent, 
  QuestionsComponent, 
  LoginComponent, 
  RegisterComponent, 
  FooterComponent, 
  MainComponent, 
  DefectListComponent, 
  DefectItemComponent, 
  DefectFilterComponent
];


@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    Components,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class ComponentModule { }
