import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { VirtualHouseComponent } from './components/virtual-house/virtual-house.component';
import { AddNewHouseComponent } from './components/add-new-house/add-new-house.component';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as loginActions from './store/actions/users/login.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HttpClientModule, 
    ToolbarComponent, 
    VirtualHouseComponent, 
    SignUpComponent, 
    LogInComponent, 
    AddNewHouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'Virtual Houses';

  constructor() {
  }

}
