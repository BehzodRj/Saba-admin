import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HeaderComponent } from './header/header.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { TripsPageComponent } from './trips-page/trips-page.component';
import { BronesPageComponent } from './brones-page/brones-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    HeaderComponent,
    UsersPageComponent,
    TripsPageComponent,
    BronesPageComponent,
    CarsPageComponent,
    AuthPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
