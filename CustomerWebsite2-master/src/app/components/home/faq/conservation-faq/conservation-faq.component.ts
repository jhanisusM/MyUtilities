import { Component, OnInit } from '@angular/core';
import { FAQ } from './../shared/faq.model';
import { ConservationFaqService } from '../shared/conservation-faq.service';

@Component({
  selector: 'app-conservation-faq',
  templateUrl: './conservation-faq.component.html',
  styleUrls: ['./conservation-faq.component.scss']
})
export class ConservationFaqComponent implements OnInit {
  loadedArticles: FAQ[];

  constructor(private conservationService: ConservationFaqService ) { }

  ngOnInit() {
    this.loadedArticles = this.conservationService.articles;
  }

}
