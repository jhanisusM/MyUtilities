import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { RateCalculatorComponent } from './rate-calculator.component';
import { RateCalculatorRoutingModule } from './rate-calculator-routing.module';

@NgModule({
declarations: [
  RateCalculatorComponent
],
imports: [
  CommonModule,
  MaterialModule,
  RateCalculatorRoutingModule
]
})
export class RateCalculatorModule { }
