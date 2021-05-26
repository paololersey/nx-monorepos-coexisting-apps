import { LoginEntity } from './login.models';
import * as LoginActions from './login.actions';
import { LoginState, initialStateLogin, reducerExportLogin } from './login.reducer';

describe('Login Reducer', () => {
  const createLoginEntity = (id: string, mail = '') =>
    ({
      id,
      mail: mail || `mail-${id}`,
    } as LoginEntity);

  beforeEach(() => {});

  describe('valid Login actions', () => {
    it('loadLoginSuccess should return set the list of known Login', () => {
      const login = [
        createLoginEntity('PRODUCT-AAA'),
        createLoginEntity('PRODUCT-zzz'),
      ];
      const action = LoginActions.loadLoginSuccess({ login });

      const result: LoginState = reducerExportLogin(initialStateLogin, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducerExportLogin(initialStateLogin, action);

      expect(result).toBe(initialStateLogin);
    });
  });
});
