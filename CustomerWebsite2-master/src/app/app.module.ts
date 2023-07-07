import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HomeModule } from './components/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ConservationModule } from './components/home/conservation/conservation.module';
import { EducationModule } from './components/home/education/education.module';
import { FAQModule } from './components/home/faq/faq.module';
import { RateCalculatorModule } from './components/home/rate-calculator/rate-calculator.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    ConservationModule,
    EducationModule,
    FAQModule,
    RateCalculatorModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
