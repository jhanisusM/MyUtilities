import { Injectable } from '@angular/core';
import { Article } from '../conservation-education-shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class WaterFriendlyLandscapingService {
private _articles: Article[] = [
  new Article(
    'Water Application',
    `Apply water only as fast as the soil can absorb.`
  ),
  new Article(
    'Use Mulch',
    `Using mulch in your landscape and garden can save as much as 20 to 30 gallons per every 1,000 feet each time you water.`
  ),
  new Article(
    'Adjust Mower Blades',
    `Set mower blades to 3 inches to encourage deeper root growth and to save 16 to 50 gallons of water per day.`
  ),
  new Article(
    'Reimagine Your Yard',
    `Feed your vegetable and fruit plants water first because they feed you!
     Water-wise plants and shade trees use little to no water once established.
     Thirsty plants such as lawn and container plants should take the lowest priority. Stat there if you need to cut back.`
  ),
  new Article(
    'Use Landscaping for Your Region',
    `Grow the proper grass type for your area. Follow the lawncare regimen for that variety.`
  ),
  new Article(
    'Keep Off of Stressed Grass',
    `Keep off of the grass. A lawn already stressed by drought can be further damaged by excessive use.`
  ),
  new Article(
    'Keep Grass Two to Three Inches',
    `By mowing the grass to 2-3 inches in height, it will help to prevent scorching and promote good root growth.`
  ),
  new Article(
    'Use Organic Matter for Plants',
    `Additional organic matter helps plant roots retain moisture and grow deeper.`
  ),
  new Article(
    'Aerate Lawn',
    `Aerate lawn to increase water absorption and reduce soil compaction.`
  ),
  new Article(
    'Remove Weeds Regularly',
    `Remove weeds that compete for water and nutrients.`
  ),
  new Article(
    'Water Landscape Only Where Needed',
    `Use soacker hoses and drip systems to deliver water exactly where it is needed.`
  ),
  new Article(
    'Use Native Plants',
    `Use native plants. They are well adapted to the local government.`
  ),
  new Article(
    'Leak-Free Hoses',
    `Make sure the connection to your garden hose is leak-free.`
  ),
  new Article(
    'Water Lawns Early',
    `Water lawns early in the day when there is less wind and lower temperatures. This keeps evaporation to a minimum.`
  ),
  new Article(
    'Avoid Overwatering',
    `Purchase an inexpensive spring-loaded system to help prevent overwatering in case you forget to shut off your sprinkler.`
  ),
];

  constructor() { }

  get articles() { return [...this._articles]; }
}
