import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ConstantPool } from '@angular/compiler';
import { ContactComponent } from './contact/contact.component';
import { FacultyHeaderComponent } from './faculty/faculty-header/faculty-header.component';
import { FacultyMainComponent } from './faculty/faculty-main/faculty-main.component';
import { ResponseFormComponent } from './faculty/response-form/response-form.component';
import { FacultyFooterComponent } from './faculty/faculty-footer/faculty-footer.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { AdminDashboardComponent } from './pages/admindashboard/admindashboard.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { FormComponent } from './pages/form/form.component';
import { SubmissionsComponent } from './pages/submissions/submissions.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'faculty-main', component:FacultyMainComponent},
  {path: 'faculty-header', component:FacultyHeaderComponent},
  {path: 'faculty-dashboard', component:FacultyDashboardComponent},
  {path: 'response-form/:id', component:ResponseFormComponent},
  {path: 'faculty-footer', component:FacultyFooterComponent},
  {path: 'admindashboard', component: AdminDashboardComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'form', component: FormComponent},
  {path: 'submission', component : SubmissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
