import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietInfoComponent } from './diet-info.component';

const routes: Routes = [
  {
    path: '',
    component: DietInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietInfoRoutingModule { }
