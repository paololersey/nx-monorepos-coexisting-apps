import { LogoutEntity } from './logout.models';
import * as LogoutActions from './logout.actions';
import { State, initialState, reducer } from './logout.reducer';

describe('Logout Reducer', () => {
  const createLogoutEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as LogoutEntity);

  beforeEach(() => {});

  describe('valid Logout actions', () => {
    it('loadLogoutSuccess should return set the list of known Logout', () => {
      const logout = [
        createLogoutEntity('PRODUCT-AAA'),
        createLogoutEntity('PRODUCT-zzz'),
      ];
      const action = LogoutActions.loadLogoutSuccess({ logout });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
