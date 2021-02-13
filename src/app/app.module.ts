import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Chart.JS
import { ChartsModule } from 'ng2-charts';

// Lodash
import { _ } from 'lodash';

// Workout modal
import { WorkoutModalPage } from './modal/workout-modal/workout-modal.page'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, WorkoutModalPage],
  entryComponents: [WorkoutModalPage],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
