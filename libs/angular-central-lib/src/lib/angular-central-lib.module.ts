import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLogin from './+state/login/login.reducer';
import { LoginEffects } from './+state/login/login.effects';
import * as fromLogout from './+state/logout/logout.reducer';
import { LogoutEffects } from './+state/logout/logout.effects';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromLogin.LOGIN_FEATURE_KEY, fromLogin.reducerExportLogin),
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature(fromLogout.LOGOUT_FEATURE_KEY, fromLogout.reducer),
    EffectsModule.forFeature([LogoutEffects]),
  ],
  providers: [AuthService]
})
export class AngularCentralLibModule {}
