import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    CustomComponentComponent
  ],
  exports: [CustomComponentComponent],
})
export class AngularCustomLibModule {}
