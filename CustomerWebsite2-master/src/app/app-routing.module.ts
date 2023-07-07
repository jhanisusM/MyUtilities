import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./components/home.module').then(m => m.HomeModule)
  },
  {
    path: 'conservation',
    loadChildren: () => import('./components/home/conservation/conservation.module').then(m => m.ConservationModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./components/home/education/education.module').then(m => m.EducationModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./components/home/faq/faq.module').then(m => m.FAQModule)
  },
  {
    path: 'rate-calculator',
    loadChildren: () => import('./components/home/rate-calculator/rate-calculator.module').then(m => m.RateCalculatorModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./components/home/announcements/announcements.module').then(m => m.AnnouncementsModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
