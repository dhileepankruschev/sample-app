import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { WorkoutComponent } from './workout.component';
import { WorkoutService } from './workout.service';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, WorkoutComponent, SearchPipe
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
