import { LogoutEntity } from './logout.models';
import { State, logoutAdapter, initialState } from './logout.reducer';
import * as LogoutSelectors from './logout.selectors';

describe('Logout Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLogoutId = (it) => it['id'];
  const createLogoutEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as LogoutEntity);

  let state;

  beforeEach(() => {
    state = {
      logout: logoutAdapter.setAll(
        [
          createLogoutEntity('PRODUCT-AAA'),
          createLogoutEntity('PRODUCT-BBB'),
          createLogoutEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Logout Selectors', () => {
    it('getAllLogout() should return the list of Logout', () => {
      const results = LogoutSelectors.getAllLogout(state);
      const selId = getLogoutId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = LogoutSelectors.getSelected(state);
      const selId = getLogoutId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLogoutLoaded() should return the current 'loaded' status", () => {
      const result = LogoutSelectors.getLogoutLoaded(state);

      expect(result).toBe(true);
    });

    it("getLogoutError() should return the current 'error' state", () => {
      const result = LogoutSelectors.getLogoutError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
