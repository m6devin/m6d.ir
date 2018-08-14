import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {NgxPageScrollModule} from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCoffee, faShoppingCart, faCircle, faLaptop, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import {faTelegram, faTwitter, faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import { OurServicesComponent } from './our-services/our-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { I18nPipe } from './i18n/i18n.pipe';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

library.add(fas, faCoffee, faShoppingCart, faCircle, faLaptop, faLock, faBars,
  faTelegram, faTwitter, faGithub, faLinkedin, faStackOverflow);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurServicesComponent,
    PortfolioComponent,
    AboutComponent,
    OurTeamComponent,
    OurClientsComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent,
    NavbarTopComponent,
    I18nPipe,
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPageScrollModule,
    FormsModule,
  ],
  providers: [],
})
export class AppModule { }
