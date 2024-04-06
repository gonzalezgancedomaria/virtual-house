import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { emailValidator } from '../../../shared/email.validator';
import { passwordValidator } from '../../../shared/password.validator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [MatDialogClose, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.form = new FormGroup({
      user_id: new FormControl(this.data.user.user_id),
      name: new FormControl(this.data.user.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])),
      surname: new FormControl(this.data.user.surname, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])),
      role_id: new FormControl(this.data.user.role_id, Validators.compose([Validators.required])),
      phone: new FormControl(this.data.user.phone,),
      email: new FormControl(this.data.user.email, Validators.compose([Validators.required, emailValidator])),
      password: new FormControl(this.data.password, Validators.compose([passwordValidator]))
    });
  }

  public save(){
    console.log(this.form.value)
    this.dialogRef.close({user: this.form.value});
  }

}
