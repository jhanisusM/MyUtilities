import { Injectable } from '@angular/core';
import { AnnouncementArticle } from './announcements.model';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const date = new Date();

export const _announcements: AnnouncementArticle[] = [
  new AnnouncementArticle (
    'planned-outage',
    'Planned Outage',
    `There will be a planned water outage on March 5th, 2020 in the San Gabriel area.
     The outage should occur between 12pm and 5pm and will affect the cities of El Monte and West Covina.
     If you have any questions regarding the outage, contact us at (626) 123-4567 or send us a message through the Customer Portal.`,
     date,
    '../../../../../../assets/images/planned-outage.jpg'
  ),
  new AnnouncementArticle (
    'board-meeting',
    'Board Meeting',
    `There will be a board meeting open to the public on April 11th at 6pm.
     The board will be discussing new operation practices and rate adjustments.
     Anyone is welcome to come. Please contact the office at (626) 123-4567 or press "Accept" to the notifcation in the Customer Portal.
     We do need an RSVP.`,
     date,
    '../../../../../../assets/images/board-meeting-small.jpg'
  )
];

@Injectable({
  providedIn: 'root'
})
export class AnnouncementArticleService {

  constructor() { }

  getAnnouncements(): Observable<AnnouncementArticle[]> {
    return of(_announcements);
  }

  getAnnouncement(id: string) {
    return this.getAnnouncements().pipe(
      map((announcements: AnnouncementArticle[]) => announcements.find(announcement => announcement.id === id))
    );
  }
}
