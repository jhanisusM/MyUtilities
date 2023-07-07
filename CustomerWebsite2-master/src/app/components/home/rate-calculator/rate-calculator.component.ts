import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface LotSizes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rate-calculator',
  templateUrl: './rate-calculator.component.html',
  styleUrls: ['./rate-calculator.component.scss']
})
export class RateCalculatorComponent implements OnInit {
  message = 'Test Calculation';
  action = 'Dismiss';

  lotSizes: LotSizes[] = [
    {value: 'lotSize1', viewValue: 'Less than 7,500 Square Feet'},
    {value: 'lotSize2', viewValue: '7,500 to 10,999 Square Feet'},
    {value: 'lotSize3', viewValue: '11,000 to 17,499 Square Feet'},
    {value: 'lotSize4', viewValue: '17,500 to 43,559 Square Feet'},
    {value: 'lotSize5', viewValue: 'Greater than 43,559 Square Feet'}
  ];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  calculate(message: string, action: string) {
    this._snackBar.open(this.message, this.action, {
      duration: 9000,
    });
  }
}
