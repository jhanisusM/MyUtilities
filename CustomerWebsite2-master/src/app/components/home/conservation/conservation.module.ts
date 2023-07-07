import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConservationComponent } from './conservation.component';
import { HomeImprovementComponent } from './home-improvement/home-improvement.component';
import { MajorAppliancesComponent } from './major-appliances/major-appliances.component';
import { ShowersFaucetsComponent } from './showers-faucets/showers-faucets.component';
import { ConservationRoutingModule } from './conservation-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../conservation-education-shared/shared.module';
import { MajorWaterApplicationsComponent } from './major-water-applications/major-water-applications.component';
import { WaterFriendlyLandscapingComponent } from './water-friendly-landscaping/water-friendly-landscaping.component';
import { KitchenBathroomComponent } from './kitchen-bathroom/kitchen-bathroom.component';

@NgModule({
declarations: [
  ConservationComponent,
  HomeImprovementComponent,
  MajorAppliancesComponent,
  ShowersFaucetsComponent,
  MajorWaterApplicationsComponent,
  WaterFriendlyLandscapingComponent,
  KitchenBathroomComponent
],
imports: [
  CommonModule,
  MaterialModule,
  SharedModule,
  ConservationRoutingModule
]
})
export class ConservationModule { }
