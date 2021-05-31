import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularCustomLibModule } from '@my-org/angular-custom-lib';
import { LoginComponent } from './login.component';
import { LoginRutingModule } from './login.routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule, AngularCustomLibModule, LoginRutingModule],
  exports:[LoginComponent]
})
export class LoginModule { }
