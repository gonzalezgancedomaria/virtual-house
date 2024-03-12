import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VirtualHouseComponent } from './virtual-house/virtual-house.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, VirtualHouseComponent, SignUpComponent, LogInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tfm';
}
