import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';
import { ConservationApplianceArticleService } from '../../conservation-education-shared/conservation-appliance-article.service';

@Component({
  selector: 'app-major-appliances',
  templateUrl: './major-appliances.component.html',
  styleUrls: ['./major-appliances.component.scss']
})
export class MajorAppliancesComponent implements OnInit {
  loadedArticles: Article[];
  imgUrl = '../../../../../assets/images/conservation-major-appliances.jpg';

  constructor(private applianceService: ConservationApplianceArticleService) { }

  ngOnInit() {
    this.loadedArticles = this.applianceService.articles;
  }

}
