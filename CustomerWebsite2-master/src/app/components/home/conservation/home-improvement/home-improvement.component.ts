import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';
import { ConservationHomeArticleService } from '../../conservation-education-shared/conservation-home-article.service';

@Component({
  selector: 'app-home-improvement',
  templateUrl: './home-improvement.component.html',
  styleUrls: ['./home-improvement.component.scss']
})
export class HomeImprovementComponent implements OnInit {
  loadedArticles: Article[];
  imgUrl = '../../../../../assets/images/conservation-home-improvement.jpeg';

  constructor(private homeService: ConservationHomeArticleService) { }

  ngOnInit() {
    this.loadedArticles = this.homeService.articles;
  }
}
