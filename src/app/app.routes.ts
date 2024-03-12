import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { ContactComponent } from './contact/contact.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VirtualHouseComponent } from './virtual-house/virtual-house.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'virtual-house', component: VirtualHouseComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpCenterComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

