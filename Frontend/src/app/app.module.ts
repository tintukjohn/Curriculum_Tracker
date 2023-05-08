import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthService} from'./auth-service.service';
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
import { AdminDashboardComponent } from './pages/admindashboard/admindashboard.component';
import { FormComponent } from './pages/form/form.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { SubmissionsComponent } from './pages/submissions/submissions.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './pages/edit-modal/edit-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { PopUpComponent } from './faculty/pop-up/pop-up.component';
import { ApprovedListComponent } from './faculty/approved-list/approved-list.component';


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
    FacultyDashboardComponent,
    AdminDashboardComponent,
    FormComponent,
    SidenavComponent,
    SubmissionsComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    EditModalComponent,
    PopUpComponent,
    ApprovedListComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ApiService,AuthService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
