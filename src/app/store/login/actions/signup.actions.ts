import { createAction, props } from "@ngrx/store";
import { User } from "../../../../models/user";

enum SignupActionTypes {
    Signup = '[User] Sign up',
    SignupSuccess = '[User] Sign up success',
    SignupFailure = '[User] Sign up failure',
}

export const SignupAction = createAction(
    SignupActionTypes.Signup,
    props<{user: User}>(),
);

export const SignupActionSuccess = createAction(
    SignupActionTypes.SignupSuccess,
    props<{user: User}>(),
);

export const SignupActionFailure = createAction(
    SignupActionTypes.SignupFailure,
    props<{error: string}>(),
);