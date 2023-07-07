import { Component, OnInit } from '@angular/core';
import { FAQ } from '../shared/faq.model';
import { UtilityFaqService } from '../shared/utility-faq.service';

@Component({
  selector: 'app-utility-faq',
  templateUrl: './utility-faq.component.html',
  styleUrls: ['./utility-faq.component.scss']
})
export class UtilityFaqComponent implements OnInit {
  loadedArticles: FAQ[];

  constructor( private utilityService: UtilityFaqService ) { }

  ngOnInit() {
    this.loadedArticles = this.utilityService.articles;
  }

}
