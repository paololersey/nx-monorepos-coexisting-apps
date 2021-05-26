import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as LogoutActions from './logout.actions';
import { LogoutEntity } from './logout.models';

export const LOGOUT_FEATURE_KEY = 'logout';

export interface State extends EntityState<LogoutEntity> {
  selectedId?: string | number; // which Logout record has been selected
  loaded: boolean; // has the Logout list been loaded
  error?: string | null; // last known error (if any)
}

export interface LogoutPartialState {
  readonly [LOGOUT_FEATURE_KEY]: State;
}

export const logoutAdapter: EntityAdapter<LogoutEntity> = createEntityAdapter<LogoutEntity>();

export const initialState: State = logoutAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const logoutReducer = createReducer(
  initialState,
  on(LogoutActions.loadLogoutInit, (state) => ({ ...state, loaded: false, error: null })),
  on(LogoutActions.loadLogoutSuccess, (state, { logout }) =>
    logoutAdapter.setAll(logout, { ...state, loaded: true })
  ),
  on(LogoutActions.loadLogoutFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return logoutReducer(state, action);
}
