import { createAction, props } from "@ngrx/store";
import { User } from "../../../../models/user";

enum UsersActionTypes {
    ListUsers = '[Users] List users',
    ListUsersSuccess = '[Users] List users success',
    ListUsersFailure = '[Users] List users failure',
    UpdateUser = '[Users] Update user',
    UpdateUserSuccess = '[Users] Update user success',
    UpdateUserFailure = '[Users] Update user failure ',
    DeleteUser = '[Users] Delete user',
    DeleteUserSuccess = '[Users] Delete user success',
    DeleteUserFailure = '[Users] Delete user failure '
}

export const listUsersAction = createAction(
    UsersActionTypes.ListUsers,
);

export const listUsersActionSuccess = createAction(
    UsersActionTypes.ListUsersSuccess,
    props<{users: User[]}>(),
);

export const listUsersActionFailure = createAction(
    UsersActionTypes.ListUsersFailure,
    props<{error: string}>(),
);

export const editUsersAction = createAction(
    UsersActionTypes.UpdateUser,
    props<{user: User}>(),
);

export const editUsersActionSuccess = createAction(
    UsersActionTypes.UpdateUserSuccess,
    props<{user: User}>(),
);

export const editUsersActionFailure = createAction(
    UsersActionTypes.UpdateUserFailure,
    props<{error: string}>(),
);

export const deleteUserAction = createAction(
    UsersActionTypes.DeleteUser,
    props<{user: User}>(),
);

export const deleteUserActionSuccess = createAction(
    UsersActionTypes.DeleteUserSuccess
);

export const deleteUserActionFailure = createAction(
    UsersActionTypes.DeleteUserFailure,
    props<{error: string}>(),
);
