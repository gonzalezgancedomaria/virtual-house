import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import * as fromActions from '../../store/actions/users/signup.actions';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/email.validator';
import { passwordValidator } from '../../shared/password.validator';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  form: FormGroup;

  constructor(private store: Store){
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])),
      surname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])),
      role: new FormControl('admin', Validators.compose([Validators.required])),
      phone: new FormControl('',),
      email: new FormControl('', Validators.compose([Validators.required, emailValidator])),
      password: new FormControl('', Validators.compose([Validators.required, passwordValidator]))
    });
  }

  public signUp() {
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(fromActions.SignupAction({ user: {...this.form.value, id: uuidv4() } }));
  }
}
