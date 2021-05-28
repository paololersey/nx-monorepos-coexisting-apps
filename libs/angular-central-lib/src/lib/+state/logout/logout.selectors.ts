import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LOGOUT_FEATURE_KEY,
  State,
  LogoutPartialState,
  logoutAdapter,
} from './logout.reducer';

// Lookup the 'Logout' feature state managed by NgRx
export const getLogoutState = createFeatureSelector<LogoutPartialState, State>(
  LOGOUT_FEATURE_KEY
);

const { selectAll, selectEntities } = logoutAdapter.getSelectors();

export const getLogoutLoaded = createSelector(
  getLogoutState,
  (state: State) => state.loaded
);

export const getLogoutError = createSelector(
  getLogoutState,
  (state: State) => state.error
);

export const getAllLogout = createSelector(getLogoutState, (state: State) =>
  selectAll(state)
);

export const getLogoutEntities = createSelector(
  getLogoutState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getLogoutState,
  (state: State) => state
);


export const getSelected = createSelector(
  getLogoutEntities,
  getSelectedId,
  (entities, selectedId) => selectedId
);




