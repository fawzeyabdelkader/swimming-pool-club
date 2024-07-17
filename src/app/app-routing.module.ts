import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full',title:'Home'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'courses',component:CoursesComponent,title:'Courses'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'**',component:NotFoundComponent,title:'NotFound'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
