import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProregisterComponent } from './proregister/proregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { ViewscoreComponent } from './viewscore/viewscore.component';

@NgModule({
  declarations: [
    AppComponent,
    ProregisterComponent,
    AdminloginComponent,
    StudentloginComponent,
    ForgotpassComponent,
    UserlandingpageComponent,
    FileuploadComponent,
    ResetpassComponent,
    ViewscoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
