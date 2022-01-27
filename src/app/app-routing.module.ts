import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { BronesPageComponent } from './brones-page/brones-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HeaderComponent } from './header/header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TripsPageComponent } from './trips-page/trips-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'trips', component: TripsPageComponent },
  { path: 'brones', component: BronesPageComponent },
  { path: 'cars', component: CarsPageComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
