import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutComponent } from './workout.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
    { path: "", redirectTo: "viewall", pathMatch: "full" },
    { path: 'viewall', component: WorkoutComponent },
    { path: 'category', component: CategoryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }