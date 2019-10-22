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
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './main/map/map.component';
import { MapMarkerComponent } from './main/map/map-marker/map-marker.component';
import { AddDefectComponent } from './add-defect/add-defect.component';

const Components = [
  NavigationComponent, 
  QuestionsComponent, 
  LoginComponent, 
  RegisterComponent, 
  FooterComponent, 
  MainComponent,
  MapComponent,
  MapMarkerComponent,
  AddDefectComponent
];


@NgModule({
  declarations: [
    Components,
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    FormsModule,
    DefectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhTdbYebLKRDLZ4BMcI8MuHvagrn113Co'
    })
  ],
  exports: [
    Components,
    FormsModule
  ]
})
export class ComponentModule { }
