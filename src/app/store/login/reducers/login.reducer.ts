import { ActionReducer, createReducer, on } from "@ngrx/store"
import { User } from "../../../../models/user"
import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity"
import * as loginActions from '../actions/login.actions'

export interface LoginState extends EntityState<User>{
    user: User | undefined;
    error: string;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user: User) => user.id
});

export const defaultState: LoginState = {
    ids: [],
    entities: {},
    user: undefined,
    error: ''
}

export const initialState: LoginState = adapter.getInitialState(defaultState);

export const reducer: ActionReducer<LoginState> = createReducer(
    initialState,
    on(loginActions.loginAction, (state, { username, password }): LoginState => ({
        ...state,
    })),
    on(loginActions.loginActionSuccess, (state, { user }): LoginState => ({
        ...state,
        user
    })),
    on(loginActions.loginActionFailure, (state, { error }): LoginState => ({
        ...state,
        error
    })),
);