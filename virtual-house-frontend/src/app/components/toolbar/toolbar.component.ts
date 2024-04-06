import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store/reducers/users/users.reducers';
import * as fromActions from '../../store/actions/users/login.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  userRole$: Observable<string>;

  constructor(private store: Store){
    this.userRole$ = this.store.select(fromStore.selectUserRole);
  }

  public logout(){
    this.store.dispatch(fromActions.logOut())
  }

}
