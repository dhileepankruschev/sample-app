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
import { CatSearchPipe } from './pipes/categorysearch.pipe';
import { HeaderComponent } from './header/header.component';
import { ViewWorkoutComponent } from './viewall.component';
import { CategoryCardComponent } from './categorycard.component';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, WorkoutComponent, SearchPipe, HeaderComponent, CategoryComponent, ViewWorkoutComponent, CategoryCardComponent,CatSearchPipe
  ],
  imports: [
    BrowserModule, HttpModule,AppRoutingModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
