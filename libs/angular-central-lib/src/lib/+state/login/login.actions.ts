import { createAction, props } from '@ngrx/store';
import { LoginEntity } from './login.models';

export const loadLoginInit = createAction(
 '[Login Page] Init',
 props<{ username: string; password: string }>()
);

export const loadLoginSuccess = createAction(
  '[Login/API] Load Login Success',
  props<{ login: LoginEntity[] }>()
);

export const loadLoginFailure = createAction(
  '[Login/API] Load Login Failure',
  props<{ error: any }>()
);
