import { Injectable } from '@angular/core';
import { Article } from '../conservation-education-shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class MajorWaterApplicationsArticleService {
  private _articles: Article[] = [
    new Article(
      'Swimming Pool Level',
      `Do not overfill your pool. Lower water levels will reduce water loss due to splashing.`
    ),
    new Article(
      'Fountains and Ponds',
      `Make sure your fountains, ponds, and swimming ponds have water recirculating pumps.`
    ),
    new Article(
      'Share Your Resources',
      `Join a community pool instead of building your own`
    ),
    new Article(
      'Recyle Pool Water',
      `When back-washing your pool, consider using the water on any salt-tolerant plants you might have.`
    ),
    new Article(
      'Decorative Water Treatments',
      `Trickling and cascading fountains lose less water to evaporation than those that spray into the air.`
    ),
    new Article(
      'Save Pool Water',
      `Reduce evaporation in your pool or hot tub with a cover.`
    )
  ];

  constructor() { }

  get articles() { return [...this._articles]; }
}
