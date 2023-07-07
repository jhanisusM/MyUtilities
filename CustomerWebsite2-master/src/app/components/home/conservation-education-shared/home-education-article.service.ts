import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class HomeEducationArticleService {
  private _articles: Article[] = [
    new Article(
      'My Ice Cubes from the Freezer Taste Funny',
      `This is a common complaint that does not have just one answer.
      However, this difference in taste and smell is typically caused by the area around the ice cubes
      themselves. A simple solution is to keep an open box of baking soda in the freezer to absorb any
      unwanted odors.`
    ),
    new Article(
      'My Water from the Faucet Looks Cloudy',
      `This is very common and oftentimes due to air bubbles in the
      water caused by temperature changes from the outside pipes to those inside the house. These bubbles`
    ),
    new Article(
      'Storing Drinking Water',
      `Drinking water that is thoroughly disinfected, such as water
      from your public water supplier, can be stored for at least six months in capped containers that will
      not rust or break, such as plastic.`
    ),
    new Article(
      'Emergency Water Storage',
      `A good rule of thumb is to store one gallon of water per person
      per day. Experts recommend storing enough water for at least three days.`
    ),
    new Article(
      'Treating Water in an Emergency',
      `If the water has been contaminated by living organisms, the most
      effective method of disinfecting is boiling. Water must be brought to a boil for one full minute (or
      three minutes if at high altitude), then allowed to cool before storing.`
    ),
    new Article(
      'Using Hot Water from the Tap for Cooking',
      `Cold water is best to use. Hot water heaters and plumbing are
      not designed to preserve water quality.`
    ),
    new Article(
      'Heating Water for Coffee or Tea in the Microwave in a Foam Cup',
      `The polystyrene foam in insulated cups is not affected by the
      microwaves and does not dissolve into the water, still allowing it to be safe for consumption.`
    ),
    new Article(
      'How to Find Your Home’s Master Valve',
      `The polystyrene foam in insulated cups is not affected by the
      microwaves and does not dissolve into the water, still allowing it to be safe for consumption.`
    ),
    new Article(
      'How to Tell if You Have Leaks in Your Home Plumbing System',
      `First, determine whether you are wasting water, then identify
      the source of the leak. One way to check is to look for the triangular arrow on your water meter. If
      it is spinning, then there is a leak in your plumbing.`
    ),
  ];

  constructor() { }

  get articles() { return [...this._articles]; }

}

