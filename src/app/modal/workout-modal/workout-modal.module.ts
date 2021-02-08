import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutModalPageRoutingModule } from './workout-modal-routing.module';

import { WorkoutModalPage } from './workout-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutModalPageRoutingModule
  ],
  declarations: [WorkoutModalPage]
})
export class WorkoutModalPageModule {}
