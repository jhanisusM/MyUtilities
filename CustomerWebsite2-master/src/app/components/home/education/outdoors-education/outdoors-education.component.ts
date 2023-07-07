import { Component, OnInit } from '@angular/core';
import { Article } from '../../conservation-education-shared/article.model';

@Component({
  selector: 'app-outdoors-education',
  templateUrl: './outdoors-education.component.html',
  styleUrls: ['./outdoors-education.component.scss']
})
export class OutdoorsEducationComponent implements OnInit {

  imgUrl = '../../../../../assets/images/outdoor-education.jpg';

  constructor() { }

  ngOnInit() {
  }

}
