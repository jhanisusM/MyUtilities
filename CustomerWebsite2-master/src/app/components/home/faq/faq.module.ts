import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { ConservationFaqComponent } from './conservation-faq/conservation-faq.component';
import { GeneralFaqComponent } from './general-faq/general-faq.component';
import { UtilityFaqComponent } from './utility-faq/utility-faq.component';
import { FaqComponent } from './faq.component';
import { FAQRoutingModule } from './faq-routing.module';

@NgModule({
declarations: [
  FaqComponent,
  ConservationFaqComponent,
  GeneralFaqComponent,
  UtilityFaqComponent
],
imports: [
  CommonModule,
  MaterialModule,
  FAQRoutingModule
]
})
export class FAQModule { }
