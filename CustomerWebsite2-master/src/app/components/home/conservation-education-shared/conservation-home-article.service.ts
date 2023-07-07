import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ConservationHomeArticleService {
  public _articles: Article[] = [

    new Article(
    'Repair Household Leaks',
    'Repair Household Leaks – Grab a wrench and fix that leaky faucet. It is inexpensive and can save you 140 gallons per week.'
    ),
    new Article(
    'Proper Faucet Use',
    'Teach children to turn off faucets tightly after each use.'
    ),
    new Article(
    'Install Drip Irrigation',
    'Install drip irrigation and a smart controller to save 15 gallons each time you water and up to 24 + gallons per day.'
    ),
    new Article(
    'Water Heaters',
    'ENERGY STAR® certified heat pump water heaters can save a household of 4 approximately $330 per year on its electric bills, compared to a standard electric one and over $3,500 over the water heaters lifetime.'
    ),
    new Article(
    'Insulate Water Pipes',
    'Wrap your water pipes with insulating tape or foam to conserve hot water.'
    ),
    new Article(
    'Save Water in the Garden',
    'Keep your garden weed free. They compete with your ornamental plants for water.'
    ),
    new Article(
    'Check Water Meter Regularly',
    'Check your water meter when there is no water being used to see if the meter moves. If it does, you have a leak that needs to be addressed.'
    ),
  ];

  constructor() { }

  get articles() { return [...this._articles]; }
}
