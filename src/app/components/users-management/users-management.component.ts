import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';
import * as fromStore from './../../store/reducers/users/users.reducers';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTableModule, MatButtonModule],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.scss'
})
export class UsersManagementComponent implements OnInit{
  users$: Observable<User[]>;
  
  displayedColumns: string[] = ['id', 'name', 'surname', 'role', 'email', 'phone', 'actions'];


  constructor(private store: Store, private service: UserService){
  }

  public ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.store.select(fromStore.selectAllUsers);
    this.users$ = this.service.getUsers();
  }

  deleteUser(userId: number) {
    // this.userService.deleteUser(userId); // Por ejemplo, si tu servicio se llama userService
  }

  editUser(userId: number) {
    // this.userService.deleteUser(userId); // Por ejemplo, si tu servicio se llama userService
  }

}
