import { ActionReducer, createReducer, on } from "@ngrx/store";
import { User } from "../../../../models/user";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as signupActions from '../actions/signup.actions';

export interface SignupState extends EntityState<User> {
    user: User;
    error: string;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user: User) => user.id
});

export const defaultState: SignupState = {
    ids: [],
    entities: {},
    user: null,
    error: null
}

export const initialState: SignupState = adapter.getInitialState(defaultState);

export const signupReducer: ActionReducer<SignupState> = createReducer(
    initialState,
    on(signupActions.SignupActionSuccess, (state, { user }): SignupState => ({
        ...adapter.addOne(user, state),
        user,
    })),
    on(signupActions.SignupActionFailure, (state, { error }): SignupState => ({
        ...state,
        error
    })),
);
