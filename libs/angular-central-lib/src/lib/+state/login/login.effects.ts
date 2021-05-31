import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { fetch } from '@nrwl/angular';
import { EMPTY } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AuthService } from '../../auth/auth.service';
import * as LoginActions from './login.actions';
import { User } from './user.model';


@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, 
              private router: Router,
              private authService: AuthService,
              private store: Store) {}
  
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loadLoginInit),
      mergeMap((action) => { 
        return this.authService.tryLogin(action.username, action.password).pipe(
            map(user => {
               this.router.navigateByUrl("/main")
               return LoginActions.loadLoginSuccess({ login: [{id:1, user}] });
            },
            catchError(async (error) => 
              LoginActions.loadLoginFailure({ error })
          )
        )
      )}
    )
    
    ))

}

 
/*fetch({
        run: (action) => {
          var user = action.username;
          var password = action.password;
          this.authService.tryLogin(user, password).
          subscribe(user => {
            // Your custom service 'load' logic goes here. For now just return a success action...
            this.router.navigateByUrl("/main")
            return LoginActions.loadLoginSuccess({ login: [{id:1, user}] });
          }, 
          error => {
            console.log(error);
            return LoginActions.loadLoginFailure({ error });
           
          });
          
          
        },

        onError: (action, error) => {
          console.error('Error', error);
          return LoginActions.loadLoginFailure({ error });
        },
      })*/
      
