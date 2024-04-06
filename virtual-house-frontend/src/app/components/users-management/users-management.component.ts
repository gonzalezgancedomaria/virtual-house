import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';
import * as fromStore from './../../store/reducers/users/users.reducers';
import * as fromActions from './../../store/actions/users/users.actions';
import { Store, select } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../dialogs/add-user/add-user.component';
import { RolePipe } from '../../pipes/role.pipe';
import { DeleteComponent } from '../dialogs/delete/delete.component';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTableModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, RolePipe],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.scss'
})
export class UsersManagementComponent implements OnInit{
  users$: Observable<User[]>;
  displayedColumns: string[] = ['id', 'name', 'surname', 'role', 'email', 'phone', 'actions'];
  isEditingUser: boolean = false;
  editingUser: User;

  constructor(private store: Store, 
    private dialog: MatDialog){
    this.store.dispatch(fromActions.listUsersAction());
  }

  public ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.store.pipe(select(fromStore.selectUsers));
  }

  deleteUser(user: User) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '32rem',
      height: '10rem',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.response){
        this.store.dispatch(fromActions.deleteUserAction({ user }))
      }
    });

  }

  editUser(user: User) {
    this.isEditingUser = !this.isEditingUser;
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '42rem',
      height: '38rem',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(fromActions.editUsersAction({ user: result.user }))
    });
  }
}
