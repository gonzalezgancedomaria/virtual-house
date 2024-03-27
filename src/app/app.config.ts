import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UsersEffects } from './store/effects/users/users.effects';
import { usersReducer } from './store/reducers/users/users.reducers';
import { virtualHousesReducer } from './store/reducers/virtual-houses/virtual-houses.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideHttpClient(withFetch()),
     provideClientHydration(), 
     provideAnimationsAsync(), 
     provideAnimationsAsync(), 
     provideStore(), 
     provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
     provideEffects(),
     provideEffects([UsersEffects]), 
     provideState({name:'users', reducer: usersReducer}),
     provideState({name:'virtualHouses', reducer: virtualHousesReducer})
    ]
};
