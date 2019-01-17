import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { WorkoutComponent } from './workout.component';
import { CategoryComponent } from './category.component';
import { WorkoutService } from './workout.service';
import { SearchPipe } from './pipes/search.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, WorkoutComponent, SearchPipe, HeaderComponent, CategoryComponent
  ],
  imports: [
    BrowserModule, HttpModule,AppRoutingModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
