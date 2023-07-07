import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';
import { KitchenBathroomService } from '../../conservation-education-shared/kitchen-bathroom.service';

@Component({
  selector: 'app-kitchen-bathroom',
  templateUrl: './kitchen-bathroom.component.html',
  styleUrls: ['./kitchen-bathroom.component.scss']
})
export class KitchenBathroomComponent implements OnInit {
  imgUrl = '../../../../../assets/images/conservation-kitchen-bathroom.jpg';
  loadedArticles: Article[];

  constructor(private kitchenBathService: KitchenBathroomService) { }

  ngOnInit() {
    this.loadedArticles = this.kitchenBathService.articles;
  }

}
