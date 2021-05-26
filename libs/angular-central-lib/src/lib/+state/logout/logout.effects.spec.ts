import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { LogoutEffects } from './logout.effects';
import * as LogoutActions from './logout.actions';

describe('LogoutEffects', () => {
  let actions: Observable<any>;
  let effects: LogoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        LogoutEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(LogoutEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: LogoutActions.init() });

      const expected = hot('-a-|', {
        a: LogoutActions.loadLogoutSuccess({ logout: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
