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
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DropdownButtonComponent } from './navigation/dropdown-button.component';

const Components = [
  NavigationComponent, 
  QuestionsComponent, 
  LoginComponent, 
  RegisterComponent, 
  FooterComponent, 
  MainComponent,
  MapComponent,
  MapMarkerComponent,
  AddDefectComponent,
  NotFoundComponent
];


@NgModule({
  declarations: [
    Components,
    DropdownButtonComponent,
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    FormsModule,
    DefectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhTdbYebLKRDLZ4BMcI8MuHvagrn113Co'
    }),
    AgmJsMarkerClustererModule
  ],
  exports: [
    Components,
    FormsModule
  ]
})
export class ComponentModule { }
