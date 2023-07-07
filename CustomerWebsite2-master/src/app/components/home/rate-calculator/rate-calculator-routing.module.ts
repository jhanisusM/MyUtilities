import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateCalculatorComponent } from './rate-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: RateCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateCalculatorRoutingModule { }
