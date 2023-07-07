import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../conservation-education-shared/shared.module';

import { EducationComponent } from './education.component';
import { EducationRoutingModule } from './education-routing.module';
import { HomeEducationComponent } from './home-education/home-education.component';
import { BusinessEducationComponent } from './business-education/business-education.component';
import { OutdoorsEducationComponent } from './outdoors-education/outdoors-education.component';
import { GeneralEducationComponent } from './general-education/general-education.component';

@NgModule({
declarations: [
  EducationComponent,
  HomeEducationComponent,
  BusinessEducationComponent,
  OutdoorsEducationComponent,
  GeneralEducationComponent,
],
imports: [
  CommonModule,
  MaterialModule,
  SharedModule,
  EducationRoutingModule
]
})
export class EducationModule { }
