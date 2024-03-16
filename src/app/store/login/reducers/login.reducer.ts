import { ActionReducer, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { User } from "../../../../models/user"
import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity"
import * as loginActions from '../actions/login.actions'

export interface LoginState extends EntityState<User>{
    userId: number;
    userRole: string;
    error: string;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user: User) => user.id
});

export const defaultState: LoginState = {
    ids: [],
    entities: {},
    userId: null,
    userRole: 'admin',
    error: null
}

export const initialState: LoginState = adapter.getInitialState(defaultState);

export const selectLoginState = createFeatureSelector<LoginState>('login');

export const reducer: ActionReducer<LoginState> = createReducer(
    initialState,
    on(loginActions.loginActionSuccess, (state, { user }): LoginState => ({
        ...adapter.addOne(user, state),
        userId: user.id,
        userRole: user.role
        
    })),
    on(loginActions.loginActionFailure, (state, { error }): LoginState => ({
        ...state,
        error
    })),
    on(loginActions.logOut, (state): LoginState => ({
        ...initialState
    })),
);

export const selectUserRole = createSelector(
    selectLoginState,
    (state: LoginState) => state?.userRole
  );

