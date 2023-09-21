import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';


const routes: Routes = [
  //-- Home Page
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiance', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminLoginComponent },
  {
    path: 'contact-details', component: ContactDetailsComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'contact-details',
        component: ContactDetailsComponent
      },

      // Add more child routes as needed
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
