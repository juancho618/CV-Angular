import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainContainerComponent } from './main-container/main-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';

//FontAwesome
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainContainerComponent,
    TopNavBarComponent,
    AboutMeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    library.add(fas, faGithub, faInstagram, faLinkedin);
  }
}
