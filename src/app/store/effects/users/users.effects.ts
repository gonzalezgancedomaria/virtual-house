import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as usersActions from '../../actions/users/users.actions';
import * as signupActions from '../../actions/users/signup.actions';
import * as loginActions from '../../actions/users/login.actions';
import { UserService } from '../../../services/user-service.service';
import { Router } from '@angular/router';

@Injectable()
export class UsersEffects {
   listUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.listUsersAction),
      mergeMap(() =>
        this.service.getUsers().pipe(
          tap(users => console.log(users)),
          map(users => usersActions.listUsersActionSuccess({ users })),
          catchError(error => of(usersActions.listUsersActionFailure({ error: error.message })))
        )
      )
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
          map(user => loginActions.loginActionSuccess({ user })),
          catchError(error => of(loginActions.loginActionFailure({ error: error.message })))
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
