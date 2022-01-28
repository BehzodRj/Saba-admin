import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { UsersEditPageComponent } from './users-edit-page/users-edit-page.component';
import { TripsEditPageComponent } from './trips-edit-page/trips-edit-page.component';
import { BronesEditPageComponent } from './brones-edit-page/brones-edit-page.component';
import { CarsEditPageComponent } from './cars-edit-page/cars-edit-page.component';

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
    UsersEditPageComponent,
    TripsEditPageComponent,
    BronesEditPageComponent,
    CarsEditPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
