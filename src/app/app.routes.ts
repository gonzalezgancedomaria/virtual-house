import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { HousesComponent } from './components/houses/houses.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VirtualHouseComponent } from './components/virtual-house/virtual-house.component';
import { HousesManagementComponent } from './components/houses-management/houses-management.component';
import { AddNewHouseComponent } from './components/add-new-house/add-new-house.component';
import { AddHotspotComponent } from './components/add-hotspot/add-hotspot.component';
import { HotspotManagementComponent } from './components/hotspot-management/hotspot-management.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'virtual-house', component: VirtualHouseComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'houses-management', component: HousesManagementComponent },
  { path: 'add-new-house', component: AddNewHouseComponent },
  { path: 'add-hotspot', component: AddHotspotComponent },
  { path: 'hotspot-management', component: HotspotManagementComponent },
  { path: 'users-management', component: UsersManagementComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

