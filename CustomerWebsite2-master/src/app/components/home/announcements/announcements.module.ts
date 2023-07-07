import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';

import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementsArticleComponent } from './announcements-article/announcements-article.component';
import { SharedModule } from '../conservation-education-shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  AnnouncementsComponent,
  AnnouncementsArticleComponent,
  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class AnnouncementsModule { }
