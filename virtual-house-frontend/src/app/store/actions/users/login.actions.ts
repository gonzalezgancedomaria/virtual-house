import { createAction, props } from "@ngrx/store";
import { User } from "../../../../models/user";

enum LoginActionTypes {
    Login = '[Auth] Log in',
    LoginSuccess = '[Auth] Log in success',
    LoginFailure = '[Auth] Log in failure',
    Logout = '[Auth] Log out'
}

export const loginAction = createAction(
    LoginActionTypes.Login,
    props<{username: string; password: string}>(),
);

export const loginActionSuccess = createAction(
    LoginActionTypes.LoginSuccess,
    props<{user: User}>(),
);

export const loginActionFailure = createAction(
    LoginActionTypes.LoginFailure,
    props<{error: string}>(),
);

export const logOut = createAction(
    LoginActionTypes.Logout
);