import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  {path:'aboutMe', component: AboutMeComponent},
  {path:'resume', component: ResumeComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
