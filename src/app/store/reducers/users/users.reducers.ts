import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from '../../../../models/user';
import * as signupActions from '../../actions/users/signup.actions';
import * as usersActions from '../../actions/users/users.actions';
import * as loginActions from '../../actions/users/login.actions';

export interface UsersState extends EntityState<User> {
  userId: number,
  userRole: string,
  error: string | null;
}

export const adapter = createEntityAdapter<User>();

export const initialState: UsersState = adapter.getInitialState({
  error: null,
  userId: null,
  userRole: null,
});

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const usersReducer = createReducer(
  initialState,
  on(usersActions.listUsersAction, state => ({
    ...state,
    error: null
  })),
  on(usersActions.listUsersActionSuccess, (state, { users }) => (
    adapter.setAll(users, { ...state, error: null })
  )),
  on(usersActions.listUsersActionFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(signupActions.SignupActionSuccess, (state, { user }): UsersState => ({
    ...adapter.addOne(user, state),
    userId: user.id,
    userRole: user.role
  })),
  on(signupActions.SignupActionFailure, (state, { error }): UsersState => ({
      ...state,
      error
  })),
  on(loginActions.loginActionSuccess, (state, { user }): UsersState => ({
    ...adapter.addOne(user, state),
    userId: user.id,
    userRole: user.role
    
})),
on(loginActions.loginActionFailure, (state, { error }): UsersState => ({
    ...state,
    error
})),
on(loginActions.logOut, (state): UsersState => ({
    ...initialState,
    userId: undefined,
    userRole: undefined
})),
);

export const {
  selectAll: selectAllUsers,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectTotal: selectTotalUsers
} = adapter.getSelectors();

export const getError = (state: UsersState) => state.error;

export const selectUserRole = createSelector(
  selectUsersState,
  (state: UsersState) => state?.userRole
);

export const selectUserId = createSelector(
  selectUsersState,
  (state: UsersState) => state?.userId
);