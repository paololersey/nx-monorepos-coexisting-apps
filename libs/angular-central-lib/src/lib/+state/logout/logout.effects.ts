import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as LogoutFeature from './logout.reducer';
import * as LogoutActions from './logout.actions';

@Injectable()
export class LogoutEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LogoutActions.loadLogoutInit),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return LogoutActions.loadLogoutSuccess({ logout: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return LogoutActions.loadLogoutFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
