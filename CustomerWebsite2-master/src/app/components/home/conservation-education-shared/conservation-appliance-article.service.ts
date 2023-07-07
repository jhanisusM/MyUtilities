import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ConservationApplianceArticleService {
  private _articles: Article[] = [
    new Article(
      'Dishwasher Use',
      `Washing dishes by hand typically uses more water than using a dishwasher.
      If you use and ENERGY STAR® certified dishwasher, you will save even more water and energy.`
    ),
    new Article(
      'Compost Food Waste',
      `Try to use the garbage disposal sparingly. As an alternative,
      try composting vegetable and food waste to save gallons of water every time.`
    ),
    new Article(
      'Instant Water Heater Use',
      `Instant Water Heater Use – Instead of running the water and waiting for it to heat up,
      install an instant water heater in your kitchen and reduce water use and energy costs.`
    ),
  ];

  constructor() {}

  get articles() { return [...this._articles]; }
}
