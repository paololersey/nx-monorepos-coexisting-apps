import { createAction, props } from '@ngrx/store';
import { LogoutEntity } from './logout.models';

export const loadLogoutInit = createAction('[Logout Page] Init');

export const loadLogoutSuccess = createAction(
  '[Logout/API] Load Logout Success',
  props<{ logout: LogoutEntity[] }>()
);

export const loadLogoutFailure = createAction(
  '[Logout/API] Load Logout Failure',
  props<{ error: any }>()
);
