import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';
import { BusinessEducationService } from '../../conservation-education-shared/business-education.service';

@Component({
  selector: 'app-business-education',
  templateUrl: './business-education.component.html',
  styleUrls: ['./business-education.component.scss']
})
export class BusinessEducationComponent implements OnInit {
  loadedArticles: Article[];
  imgUrl = '../../../../../assets/images/business-education.jpeg';

  constructor(private businessEducationService: BusinessEducationService) { }

  ngOnInit() {
    this.loadedArticles = this.businessEducationService.articles;
  }

}
