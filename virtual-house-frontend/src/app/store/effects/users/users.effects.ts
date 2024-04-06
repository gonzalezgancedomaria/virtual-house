import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as usersActions from '../../actions/users/users.actions';
import * as signupActions from '../../actions/users/signup.actions';
import * as loginActions from '../../actions/users/login.actions';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class UsersEffects {
   listUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.listUsersAction),
      mergeMap(() =>
        this.service.getUsers().pipe(
          map(users => usersActions.listUsersActionSuccess({ users })),
          catchError(error => of(usersActions.listUsersActionFailure({ error: error.message })))
        )
      )
    )
  );

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.editUsersAction),
      mergeMap(action =>
        this.service.updateUser(action.user.user_id, action.user).pipe(
          map(user => usersActions.editUsersActionSuccess({ user })),
          catchError(error => of(usersActions.editUsersActionFailure({ error: error.message })))
        )
      )
    )
  );

  editUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.editUsersActionSuccess),
      switchMap(() => {
        return [usersActions.listUsersAction()];
      }) 
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.deleteUserAction),
      mergeMap(action =>
        this.service.deleteUser(action.user.user_id).pipe(
          map(u => usersActions.deleteUserActionSuccess()),
          catchError(error => of(usersActions.deleteUserActionFailure({ error: error.message })))
        )
      )
    )
  );

  deleteUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.deleteUserActionSuccess),
      switchMap(() => {
        return [usersActions.listUsersAction()];
      }) 
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupActions.SignupAction),
      mergeMap(action =>
        this.service.register(action.user).pipe(
          map(user => signupActions.SignupActionSuccess({ user })),
          catchError(error => of(signupActions.SignupActionFailure({ error: error.message })))
        )
      )
    )
  );

  signUpSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupActions.SignupActionSuccess),
      map(() => {
        this.router.navigate(['/home']);
      })
    ),
    { dispatch: false }
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.loginAction),
      mergeMap(action => 
        this.service.login(action.username, action.password).pipe(
          map(user => {
            if (user) {
              return loginActions.loginActionSuccess({ user });
            } else {
              return loginActions.loginActionFailure({ error: 'Invalid login' });
            }
          }),
          catchError(error => of(loginActions.loginActionFailure({ error: 'Error during login' })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.loginActionSuccess),
      map(() => {
        this.router.navigate(['/home']);
      })
    ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.logOut),
      mergeMap(() =>
        this.service.logout().pipe(
          map(() => {
            this.router.navigate(['/login']);
            console.log('logout')
            return loginActions.logOut();
          }),
          catchError(error => of(loginActions.loginActionFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: UserService,
    private router: Router
  ) {}
}
