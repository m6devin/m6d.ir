import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {NgxPageScrollModule} from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCoffee, faShoppingCart, faCircle, faLaptop, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faCoffee, faShoppingCart, faCircle, faLaptop, faLock);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPageScrollModule
  ],
  providers: [],
})
export class AppModule { }
