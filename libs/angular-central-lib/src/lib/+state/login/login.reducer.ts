import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as LoginActions from './login.actions';
import { LoginEntity } from './login.models';
import { User } from './user.model';

export const LOGIN_FEATURE_KEY = 'login';

export interface LoginState extends EntityState<LoginEntity> {

  loaded: boolean; // has the Login list been loaded
  error?: string | null; // last known error (if any)
}

export interface LoginPartialState {
  readonly [LOGIN_FEATURE_KEY]: LoginState;
}

export const loginAdapter: EntityAdapter<LoginEntity> = createEntityAdapter<LoginEntity>();

export const initialStateLogin: LoginState = loginAdapter.getInitialState({
  // set initial required properties
  user: undefined,
  loaded: false,
});

const loginReducer = createReducer(
  initialStateLogin,
  on(LoginActions.loadLoginInit, (state) => ({ ...state, loaded: false, error: null })),
  on(LoginActions.loadLoginSuccess, (state, { login }) =>
    loginAdapter.setAll(login, { ...state, loaded: true })
  ),
  on(LoginActions.loadLoginFailure, (state, { error }) => ({ ...state, error }))
);

export function reducerExportLogin(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}
