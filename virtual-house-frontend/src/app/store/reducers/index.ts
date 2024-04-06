import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "./../reducers/users/users.reducers";
import * as fromVirtualHouses from './../reducers/virtual-houses/virtual-houses.reducers';
import * as fromUsers from './../reducers/users/users.reducers';
import { VirtualHousesState } from "./virtual-houses/virtual-houses.reducers";

 export interface GlobalState {
    users: UsersState,
    virtualHouses: VirtualHousesState
 }

 export const reducers: ActionReducerMap<GlobalState> = {
   users: fromUsers.usersReducer,
   virtualHouses: fromVirtualHouses.virtualHousesReducer
}
 
const selectGlobalState = createFeatureSelector<GlobalState>('state');

const selectUsersState = createSelector(
   selectGlobalState,
   (state: GlobalState) => state.users,
 );

 const selectVirtualHousesState = createSelector(
  selectGlobalState,
  (state: GlobalState) => state.virtualHouses,
);

 export const selectListUsersState = createSelector(
   selectUsersState,
   fromUsers.selectAllUsers,
 );

 export const selectListVirtualHousesState = createSelector(
  selectVirtualHousesState,
  fromVirtualHouses.selectAllVirtualHouses,
);
 