import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessEducationService {
  private _articles: Article[] = [
    new Article(
      'Heating Water for Coffee or Tea in the Microwave in a Foam Cup',
      `The polystyrene foam in insulated cups is not affected by the microwaves
      and does not dissolve into the water, still allowing it to be safe for consumption.`
    ),
    new Article(
      'Emergency Water Storage',
      `A good rule of thumb is to store one gallon of water per person per day.
      Experts recommend storing enough water for at least three days.`
    ),
    new Article(
      'Storing Drinking Water',
      `Drinking water that is thoroughly disinfected, such as water from your
      public water supplier, can be stored for at least six months in capped containers that will not rust
      or break, such as plastic.`
    ),
    new Article(
      'My Water from the Faucet Looks Cloudy',
      `This is very common and oftentimes due to air bubbles in the water caused
      by temperature changes from the outside pipes to those inside the house. These bubbles are just like
      those found in a carbonated beverage and will typically rise to the top of the water within minutes
      and are released as a gas into the atmosphere.`
    )
  ];

  constructor() { }

  get articles() { return [...this._articles]; }

}
