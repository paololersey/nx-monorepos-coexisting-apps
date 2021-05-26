import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as LoginFeature from './login.reducer';
import * as LoginActions from './login.actions';
import { User } from '@my-org/angular-central-lib';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, 
              private http: HttpClient,
              private authService: AuthService) {}
  
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loadLoginInit),
      fetch({
        run: (action) => {
          var user = action.username;
          var password = action.password;
          this.authService.login(user, password).
          subscribe(user => {
            // Your custom service 'load' logic goes here. For now just return a success action...
            return LoginActions.loadLoginSuccess({ login: [] });
          }, 
          error => {
            console.error('Error', error);
            return LoginActions.loadLoginFailure({ error });
           
          });
          
          
        },

        onError: (action, error) => {
          console.error('Error', error);
          return LoginActions.loadLoginFailure({ error });
        },
      })
    )
  );

}
