import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';
import { MajorWaterApplicationsArticleService } from '../../conservation-education-shared/major-water-applications-article.service';

@Component({
  selector: 'app-major-water-applications',
  templateUrl: './major-water-applications.component.html',
  styleUrls: ['./major-water-applications.component.scss']
})
export class MajorWaterApplicationsComponent implements OnInit {
  imgUrl = '../../../../../assets/images/conservation-major-water-applications.jpg';
  loadedArticles: Article[];

  constructor(private waterApplicationService: MajorWaterApplicationsArticleService) { }

  ngOnInit() {
    this.loadedArticles = this.waterApplicationService.articles;
  }

}
