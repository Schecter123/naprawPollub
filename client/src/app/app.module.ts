import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { PlaceService } from './shared/services/place.service';
import { ComponentModule } from './components/component.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
  ],
  providers: [
    UserService,
    PlaceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
