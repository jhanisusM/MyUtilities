import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';
import { HomeEducationArticleService } from '../../conservation-education-shared/home-education-article.service';

@Component({
  selector: 'app-home-education',
  templateUrl: './home-education.component.html',
  styleUrls: ['./home-education.component.scss']
})
export class HomeEducationComponent implements OnInit {
  loadedArticles: Article[];
  imgUrl = '../../../../../assets/images/home-education.jpg';

  constructor(private homeEducationService: HomeEducationArticleService) { }

  ngOnInit() {
    this.loadedArticles = this.homeEducationService.articles;
  }

}
