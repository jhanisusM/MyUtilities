import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ConservationShowerArticleService {
  public _articles: Article[] = [
    new Article(
      'Showers for Only 5 Minutes',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Turn Off Water When Brushing Teeth or Shaving',
      'If you turn off the water from your faucet while brushing your teeth or shaving, you can save up to 10 gallons of water a day per person.'
    ),
    new Article(
      'Install Aerators',
      'When you install aerators on the faucets in your home, you can save up to 1.2 gallons of water a day per person.'
    ),
    new Article(
      'Shower Heads',
      `The average family could save up to 2,900 gallons per year by installing WaterSense® labeled shower heads.
      Since these water savings will reduce demands on water heaters, they will also save energy and money.
      In fact, the average family could save more than 370 kilowatt hours of electricity annually, enough to power a house for 13 days.`
    ),
    new Article(
      'Saving Shower Water',
      `While waiting for the water to warm up in your bathroom, use a bucket to catch the unused cool water and to flush the toilet, clean or water plants.`
    ),
    new Article(
      'Take Showers Instead of Baths',
      `Stick to showers if you want to save water. A shower with a low-flow showerhead of only 10 minutes uses 25 gallons, while the average bath uses anywhere from 40 to 50 gallons.`
    ),
    new Article(
      'Water Saving Faucets',
      `Go green with a WaterSense certified faucet and save up to 30% on your water usage.`
    ),
    new Article(
      'Improve Performance on Older Faucets',
      `Installing flow optimized Aerators can improve performance on older faucets with very little cost.`
    ),
    new Article(
      'Update Household Faucets',
      'Perform regular maintenance on faucet washers to avoid leaks or consider using washerless faucets.'
    ),
    new Article(
      'Replace Old Showerheads',
      'By replacing an old shower head, you can save up to 7.5 gallons of water per minute without effecting the water spray at varying water pressures.'
    ),
    new Article(
      'Prevent Leaky Faucets',
      'A leaky faucet that drips one time per second can waste up to 8 gallons of water a day.'
    ),
  ];

  constructor() {}

  get articles() { return [...this._articles]; }
}
