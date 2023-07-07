import { Injectable } from '@angular/core';
import { Article } from '../conservation-education-shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class KitchenBathroomService {
  private _articles: Article[] = [
    new Article(
      'High-Effiency Toilets',
      `Install a high-efficiency toilet to save up to 19 gallons of water per person, per day.`
    ),
    new Article(
      'Use Less Bathwater',
      `While bathing, fill your bathtub halfway or less to save up to 12 gallons per use.`
    ),
    new Article(
      'Check Toilet for Leaks',
      `To check your toilet tank for leaks, put food coloring inside to see if it seeps into the bowl.
      Fix any leaks and save gallons per day.`
    ),
    new Article(
      'Shorten Your Shower',
      `Shorten your shower by a minute or two and you will save up to 150 gallons per month.`
    ),
    new Article(
      'Water-Saving Device',
      `Look for WaterSense labeled toilets, faucets, urinals and shower heads to save gallons per day.`
    ),
    new Article(
      'Save Water in the Bathroom',
      `Keep track of water usage in the bathroom. This can account for roughly 60% of a home's water usage.`
    ),
    new Article(
      'Stop Leaks in Toilet and Faucet',
      `A leaky toilet or faucet can waste thousands of gallons of water per year.`
    ),
    new Article(
      'Improve Toilet Efficiency',
      `To improve toilet efficiency, do not throw trash in the toilet.`
    ),
    new Article(
      'Use a Water Displacement Device',
      `Use a water displacement device (a plastic bottle filled with pebbles or sand) in the toilet tnak to cause less water to be needed to fill completely.
       Make sure device is clear or flushing mechanism.`
    ),
    new Article(
      'Save Money While Preparing Food',
      `Steam food instead of boiling to save water.`
    ),
    new Article(
      'Reuse Water in Kitchen',
      `User water left over from boiling pasta to water plants. Make sure to let it cool first.`
    ),
    new Article(
      'Save Water in the Shower',
      `Consider turning off the shower while soaping up and then turn on again to rinse.`
    ),
    new Article(
      'Save Water While Shaving',
      `Rinse your razor in a few inches of sink water instead of running under the water.`
    ),
    new Article(
      'Replace Fill Valve in Toilet',
      `Installation of a new fill valve or toilet flapper can stop a leaky toilet and reduce your water bill by up to 40%.`
    ),
    new Article(
      'Save Water While Preparing Food',
      `Peel and clean vegetables in a large bowl filled with water instead of under running water.`
    ),
  ];

  constructor() { }

  get articles() { return [...this._articles]; }
}
