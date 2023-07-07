import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralEducationService {
  private _articles: Article[] = [
    new Article(
      'Safely Disposing of Pharmaceuticals',
      `Do not flush pharmaceuticals down the toilet or pour them down the drain
      because waste water treatment plants and septic systems are not designed to treat pharmaceutical
      waste, causing the drugs to often end up in our waterways.`
    )
  ];
  constructor() { }

  get articles() { return [...this._articles]; }

}
