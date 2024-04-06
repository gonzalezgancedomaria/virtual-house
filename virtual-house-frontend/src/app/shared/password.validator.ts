import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl): { [key: string]: any } | null {
  const passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isValid = passwordPattern.test(control.value);

  return isValid ? null : { 'invalidPassword': { value: control.value } };
}