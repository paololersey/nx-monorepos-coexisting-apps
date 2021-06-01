import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LOGIN_FEATURE_KEY,
  LoginState,
  LoginPartialState,
  loginAdapter,
} from './login.reducer';

// Lookup the 'Login' feature state managed by NgRx
export const getLoginState = createFeatureSelector<LoginPartialState, LoginState>(
  LOGIN_FEATURE_KEY
);

const { selectAll, selectEntities } = loginAdapter.getSelectors();

export const getLoginLoaded = createSelector(
  getLoginState,
  (state: LoginState) => state.loaded
);

export const getLoginError = createSelector(
  getLoginState,
  (state: LoginState) => state.error
);

export const getAllLogin = createSelector(getLoginState, (state: LoginState) =>
  selectAll(state)
);

export const getLoginEntities = createSelector(getLoginState, (state: LoginState) =>
  selectEntities(state)
);

export const getSelectedUser= createSelector(
  getLoginState,
  (state: LoginState) => state.entities[1].user.username
);
