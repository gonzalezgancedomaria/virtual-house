import { createAction, props } from "@ngrx/store";
import { User } from "../../../../models/user";

enum LoginActionTypes {
    Login = '[User] Log in',
    LoginSuccess = '[User] Log in success',
    LoginFailure = '[User] Log in failure',
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