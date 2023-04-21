import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FacultyMainComponent } from './faculty/faculty-main/faculty-main.component';
import { FacultyHeaderComponent } from './faculty/faculty-header/faculty-header.component';
import { FacultyFooterComponent } from './faculty/faculty-footer/faculty-footer.component';
import { ResponseFormComponent } from './faculty/response-form/response-form.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    LoginComponent,
    ContactComponent,
    FacultyMainComponent,
    FacultyHeaderComponent,
    FacultyFooterComponent,
    ResponseFormComponent,
    FacultyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
