import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
  standalone: true
})
export class RolePipe implements PipeTransform {

  transform(role_id: number): string {
    return role_id === 1 ? 'Administrador' : 'Usuario';
  }

}
