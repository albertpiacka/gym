import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutModalPage } from './workout-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutModalPageRoutingModule {}
