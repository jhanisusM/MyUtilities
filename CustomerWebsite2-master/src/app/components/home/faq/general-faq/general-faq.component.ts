import { Component, OnInit } from '@angular/core';
import { FaqService } from '../shared/faq.service';
import { FAQ } from '../shared/faq.model';

@Component({
  selector: 'app-general-faq',
  templateUrl: './general-faq.component.html',
  styleUrls: ['./general-faq.component.scss']
})
export class GeneralFaqComponent implements OnInit {
  loadedArticles: FAQ[];

  constructor(private faqService: FaqService) {}

  ngOnInit() {
   this.loadedArticles = this.faqService.articles;
  }

}
