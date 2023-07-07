import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit} from '@angular/core';
import { AnnouncementArticle } from './announcements-article/shared/announcements.model';
import { AnnouncementArticleService } from './announcements-article/shared/announcements-article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-annoucements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  public innerWidth: any;
  public opened: boolean;

  announcements$: Observable<AnnouncementArticle[]>;
  id: string;
  imgUrl = '../../../../assets/images/people-on-phone.jpg';

  constructor(private announcementService: AnnouncementArticleService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.announcements$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id');
        return this.announcementService.getAnnouncements();
      })
    );
    this.innerWidth = window.innerWidth;
    this.opened = this.innerWidth < 766 ? false : true;
  }

}
