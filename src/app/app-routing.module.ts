import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthGuard } from './auth.guard';
import { BronesEditPageComponent } from './brones-edit-page/brones-edit-page.component';
import { BronesPageComponent } from './brones-page/brones-page.component';
import { CarsEditPageComponent } from './cars-edit-page/cars-edit-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HeaderComponent } from './header/header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TripsEditPageComponent } from './trips-edit-page/trips-edit-page.component';
import { TripsPageComponent } from './trips-page/trips-page.component';
import { UsersEditPageComponent } from './users-edit-page/users-edit-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersPageComponent, canActivate: [AuthGuard] },
  { path: 'usersedit/:id', component: UsersEditPageComponent, canActivate: [AuthGuard] },
  { path: 'trips', component: TripsPageComponent, canActivate: [AuthGuard] },
  { path: 'tripsedit/:id', component: TripsEditPageComponent, canActivate: [AuthGuard] },
  { path: 'brones', component: BronesPageComponent, canActivate: [AuthGuard] },
  { path: 'bronesedit/:id', component: BronesEditPageComponent, canActivate: [AuthGuard] },
  { path: 'cars', component: CarsPageComponent, canActivate: [AuthGuard] },
  { path: 'carsedit/:id', component: CarsEditPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
