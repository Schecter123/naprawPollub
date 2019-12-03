import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from "@angular/common/http";

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
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from 'src/app/components/login/AuthInterceptor';
import { AuthGuard } from './shared/auth-guard.service';
import { UploadImageService } from './shared/services/upload-image.service';
import { ManageUserGuard } from './shared/manage-user-guard.service';
import { ManagePlaceAdminGuard } from './shared/manage-place-admin-guard.service';
import { ManagePageAdminGuard } from './shared/manage-page-admin-guard.service';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RatingService } from './shared/services/rating.service';

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
  ],
  providers: [
    UserService,
    PlaceService,
    DefectService,
    RoomService,
    MarkerService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    ManageUserGuard,
    ManagePlaceAdminGuard,
    ManagePageAdminGuard,
    UploadImageService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    RatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
