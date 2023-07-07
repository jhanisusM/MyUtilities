import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavbarService } from '../../shared-services/navbar.service';
import { PayMyBillService } from '../pay-my-bill-shared/pay-my-bill.service';
import { Bill } from '../pay-my-bill-shared/bill.model';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss']
})
export class BillDetailComponent implements OnInit {
  bill$: Observable<Bill>;

  constructor(public navbarService: NavbarService,
              private billService: PayMyBillService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.navbarService.show();
    this.bill$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.billService.getBill(params.get('id')))
    );
  }

}
