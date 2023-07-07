import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConservationComponent } from './conservation.component';

const routes: Routes = [
  {
    path: '',
    component: ConservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConservationRoutingModule { }
