import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { AuthService } from '../../auth/auth.service';
import * as LoginActions from './login.actions';
import { User } from './user.model';


@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, 
              private http: HttpClient,
              private authService: AuthService,
              private store: Store) {}
  
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loadLoginInit),
      fetch({
        run: (action) => {
          var user = action.username;
          var password = action.password;
          this.authService.tryLogin(user, password).
          subscribe(user => {

            // Your custom service 'load' logic goes here. For now just return a success action...
            return this.store.dispatch(LoginActions.loadLoginSuccess({ login: [{id:1, user}] }));
          }, 
          error => {
            console.log(error);
            return this.store.dispatch(LoginActions.loadLoginFailure({ error }));
           
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
