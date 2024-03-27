import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as virtualHousesActions from '../../actions/virtual-houses/virtual-houses.actions';
import { VirtualHouseService } from '../../../services/virtual-house.service';
import { Router } from '@angular/router';

@Injectable()
export class VirtualHousesEffects {
   listVirtualHouses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(virtualHousesActions.listVirtualHousesAction),
      mergeMap(() =>
        this.service.getVirtualHouses().pipe(
          tap(virtualHouses => console.log(virtualHouses)),
          map(virtualHouses => virtualHousesActions.listVirtualHousesActionSuccess({ virtualHouses })),
          catchError(error => of(virtualHousesActions.listVirtualHousesActionFailure({ error: error.message })))
        )
      )
    )
  );

  addVirtualHouse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(virtualHousesActions.addVirtualHouseAction),
      mergeMap(action =>
        this.service.createVirtualHouse(action.virtualHouse).pipe(
          map(virtualHouse => virtualHousesActions.addVirtualHouseActionSuccess()),
          catchError(error => of(virtualHousesActions.addVirtualHouseActionFailure({ error: error.message })))
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
    private service: VirtualHouseService,
    private router: Router
  ) {}
}
