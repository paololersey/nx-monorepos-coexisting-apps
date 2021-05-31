import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularCustomLibModule } from '@my-org/angular-custom-lib';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule, MainRoutingModule, FormsModule, IonicModule, AngularCustomLibModule
  ]
})
export class MainModule { }
