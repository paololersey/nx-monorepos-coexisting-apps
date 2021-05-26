import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLogin from './+state/login/login.reducer';
import { LoginEffects } from './+state/login/login.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromLogin.LOGIN_FEATURE_KEY, fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class AngularCentralLibModule {}
