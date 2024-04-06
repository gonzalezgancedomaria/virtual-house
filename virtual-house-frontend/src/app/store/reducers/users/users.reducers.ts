import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from '../../../../models/user';
import * as signupActions from '../../actions/users/signup.actions';
import * as usersActions from '../../actions/users/users.actions';
import * as loginActions from '../../actions/users/login.actions';

export interface UsersState extends EntityState<User> {
  userId: number,
  users: User[],
  userRole: string,
  error: string | null;
}

export const adapter = createEntityAdapter<User>({
  selectId: (u) => u.user_id
});

export const initialState: UsersState = adapter.getInitialState({
  error: null,
  users: null,
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
  on(usersActions.listUsersActionSuccess, (state, { users }) => ({
      ...state,
    users
  })),
  on(usersActions.listUsersActionFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(usersActions.editUsersAction, (state, { user }) => ({
    ...state,
    users: state.users.map(u =>
      u.user_id === user.user_id ? { ...u, ...user } : user
    )
  })),
  on(usersActions.editUsersActionSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u =>
      u.user_id === user.user_id ? { ...u, ...user } : user
    )
  })),
  on(usersActions.editUsersActionFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(usersActions.deleteUserAction, (state, { user }) => ({
    ...state,
    users: state.users.filter(u => u.user_id !== user.user_id)
  })),
  on(usersActions.deleteUserActionSuccess, state => ({
      ...state,
  })),
  on(usersActions.deleteUserActionFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(signupActions.SignupActionSuccess, (state, { user }): UsersState => ({
    ...adapter.addOne(user, state),
    userId: user.user_id,
    userRole: user.role_id
  })),
  on(signupActions.SignupActionFailure, (state, { error }): UsersState => ({
      ...state,
      error
  })),
  on(loginActions.loginActionSuccess, (state, { user }): UsersState => ({
    ...adapter.addOne(user, state),
    userId: user.user_id,
    userRole: user.role_id
    
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

export const selectUsers = createSelector(
  selectUsersState,
  (state: UsersState) => state?.users
);