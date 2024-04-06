import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import * as loginActions from './../../store/actions/users/login.actions';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  form: FormGroup;

  constructor(private store: Store, private service: UserService, private router: Router){
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  public login() {
    this.store.dispatch(loginActions.loginAction({username: this.form.get('email').value, password: this.form.get('password').value}))
  }

}
