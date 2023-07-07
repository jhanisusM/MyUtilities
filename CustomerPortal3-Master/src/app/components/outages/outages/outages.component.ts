import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';
import { MatDialog } from '@angular/material/dialog';
import { ReportOutageModalComponent } from '../report-outage-modal/report-outage-modal.component';
import { ServiceRequestModalComponent } from './service-request-modal/service-request-modal.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MobileOutageMenuComponent } from '../mobile-outage-menu/mobile-outage-menu.component';

export interface OutageDialogData {
  outage: string;
}

export interface ServiceRequestDialogData {
  serviceRequest: string;
}

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.scss']
})
export class OutagesComponent implements OnInit {

  serviceRequest: string;
  outage: string;


  constructor(private outageMenuMobile: MatBottomSheet,
              public navbarService: NavbarService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.navbarService.show();
  }

  openMobileOutageMenu(): void {
    this.outageMenuMobile.open(MobileOutageMenuComponent);
  }

  openReportOutageDialog(): void {
    const dialogRef = this.dialog.open(ReportOutageModalComponent, {
      width: '500px',
      data: {outage: this.outage}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.outage = result;
    });
  }
  openServiceRequestDialog(): void {
    const dialogRef = this.dialog.open(ServiceRequestModalComponent, {
      data: {serviceRequest: this.serviceRequest}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.serviceRequest = result;
    });
  }
}
