import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';
import { GeneralEducationService } from '../../conservation-education-shared/general-education.service';

@Component({
  selector: 'app-general-education',
  templateUrl: './general-education.component.html',
  styleUrls: ['./general-education.component.scss']
})
export class GeneralEducationComponent implements OnInit {
  loadedArticles: Article[];
  imgUrl = '../../../../../assets/images/general-education.jpg';

  constructor(private generalEducationService: GeneralEducationService) { }

  ngOnInit() {
    this.loadedArticles = this.generalEducationService.articles;
  }

}
