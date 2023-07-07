import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';
import { WaterFriendlyLandscapingService } from '../../conservation-education-shared/water-friendly-landscaping.service';

@Component({
  selector: 'app-water-friendly-landscaping',
  templateUrl: './water-friendly-landscaping.component.html',
  styleUrls: ['./water-friendly-landscaping.component.scss']
})
export class WaterFriendlyLandscapingComponent implements OnInit {
  imgUrl = '../../../../../assets/images/conservation-friendly-landscaping.jpg';
  loadedArticles: Article[];

  constructor(private waterFriendlyLand: WaterFriendlyLandscapingService) { }

  ngOnInit() {
    this.loadedArticles = this.waterFriendlyLand.articles;
  }

}
