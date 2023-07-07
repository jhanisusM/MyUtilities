import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AnnouncementArticle } from './shared/announcements.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AnnouncementArticleService } from './shared/announcements-article.service';

@Component({
  selector: 'app-announcements-article',
  templateUrl: './announcements-article.component.html',
  styleUrls: ['./announcements-article.component.scss']
})
export class AnnouncementsArticleComponent implements OnInit {
  announcement$: Observable<AnnouncementArticle>;

  constructor( private route: ActivatedRoute,
               private announcementService: AnnouncementArticleService
              ) {}

  ngOnInit() {
    this.announcement$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.announcementService.getAnnouncement(params.get('id')))
    );
  }
}
