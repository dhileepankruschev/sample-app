import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewWorkoutComponent } from './viewall.component';
import { CategoryComponent } from './category.component';
import { CreateWorkoutComponent } from './createworkout.component';

const routes: Routes = [
    { path: "", redirectTo: "viewall", pathMatch: "full" },
    { path: 'viewall', component: ViewWorkoutComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'create', component: CreateWorkoutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }