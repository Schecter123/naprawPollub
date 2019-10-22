import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { PlaceService } from './shared/services/place.service';
import { ComponentModule } from './components/component.module';
import { DefectService } from './shared/services/defect.service';
import { RoomService } from './shared/services/room.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MarkerService } from './shared/services/marker.service';
import { MessageService } from 'src/app/shared/services/message.service';
import {ToastrModule} from 'ngx-toastr';

//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentModule,
    ToastrModule.forRoot()
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyD7V_B_3KdjW6_cZrU3x3DxOS1SU_BMD20'
    // })
  ],
  providers: [
    UserService,
    PlaceService,
    DefectService,
    RoomService,
    MarkerService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
