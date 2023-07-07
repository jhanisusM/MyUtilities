import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementsArticleComponent } from './announcements-article/announcements-article.component';

const routes: Routes = [
  { path: '',
    component: AnnouncementsComponent,
  },
  {
    path: ':id',
    component: AnnouncementsArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule { }
