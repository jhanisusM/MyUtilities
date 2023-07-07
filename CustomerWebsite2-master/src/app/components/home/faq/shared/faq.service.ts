import { Injectable } from '@angular/core';
import { FAQ } from './faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  public _articles: FAQ[] = [
    new FAQ(
      'What is my Service Charge?',
      `This is considered a 'ready to serve' charge, and is comprised of our company's
      fixed costs as determined by the California Public Utilities Commission (CPUC).
      It appears on each bill you receive and does not change from billing cycle to billing cycle.`
    ),
    new FAQ(
      'Why am I charged a PUC fee?',
      `The California Public Utilities Commission (CPUC) regulates our rates.
      This government agency collects 1.44% of a combination of the water and service charge as their fee.
      The PUC fee is calculated by adding the Service Charge to the Water Charge and multiplying 1.447% of that sum.
      This money is sent to the CPUC quarterly.`
    ),
    new FAQ(
      'What is a CCF?',
      `CCF is a measurement of liquid, it represents 100 cubic feet. You may also see it written as HCF.
      Each cubic foot of water equals 7.48 gallons, therefore one CCF is 748 gallons.
      Our water charge is $X.XX per CCF which calculates at $X.XX for each 748 gallons of water used.`
    ),
    new FAQ(
      'What do I own and what is owned by My Utilities',
      `The customer owns all water pipes and fixtures from the water meter to their home.
      Any pipes or equipment from the meter to the water main is the responsibility of My Utilities, including the meter box and cover.`
    ),
    new FAQ(
      'Can I pay my bill by credit card?',
      `Yes, you can pay using either a credit card or debit card. This can be done in just a few easy steps through the Customer Portal or by downloading the “My Utilities App” and visiting the “Pay My Bill” section. `
    ),
    new FAQ(
      'Can I make a payment by phone?',
      `No, we do not accept phone payments.`
    ),
    new FAQ(
      'When is my bill due?',
      `The due date is printed on your bill and is typically 30 days from the
      date your account was billed. As a reminder,
      any accounts not paid by the due date will be charged a late fee.
      The late fee is 10% of the water fee and service charge.`
    ),
    new FAQ(
      'Where is my water shutoff valve?',
      `Your main water shutoff valve controls all the water coming into your house. Everyone in your home should know where the valve is,
      and how to turn it off. In case of an emergency such as a burst pipe,
      shutting off the water quickly could prevent costly damage from flooding.
      Often the shutoff valve is found near the water meter, inside the water meter box.
      You may also find one attached to the outside of your home on the same side as the meter.
      If the meter is at the curb it would typically be near your front porch, if the meter is in the back yard, it would be on that side of the house.
      If you cannot locate your shutoff valve, please call our office to schedule an appointment and a field representative will show you where it is located.
      You may want to periodically turn the valve to make sure it isn't stuck.`
    ),
    new FAQ(
      'How do I check for leaks?',
      `An average 8-foot-deep 16' x 32' swimming pool holds approximately 21,000 gallons of water which is 28 ccf.
      The cost for the water to fill that pool would be $72.38 at our current rate.`
    ),
    new FAQ(
      'What should I do to dispute a bill?',
      `If you question the amount of your bill, you should ask for an explanation in person or by telephone from the customer service representative.
      A representative will review your situation and take necessary action. If you are not satisfied with the explanation from My Utility Services and wish to register
      a complaint (prior to receiving a shut-off notice) or request an investigation, you must deposit the amount of your bill with:

      California Public Utilities Commission (CPUC)
      State Office Building
      505 Van Ness Avenue, Room 2003
      San Francisco, CA 94102

      Make your check or remittance payable to the "California Public Utilities Commission" and attach a copy of the bill in question along with a
      statement explaining the basis for your dispute. The CPUC will review the basis of the billed amount and disburse the deposit in accordance with its findings.
      The CPUC will not accept deposits when the dispute appears to be over matters that do not directly relate to the accuracy of the bill.
      Such matters include the utility's service quality, rate levels, pending rate application and fuel sources or power.`
    ),
    new FAQ(
      'How can I check my water usage?',
      `To determine your average daily use, you can read your meter on a daily or weekly basis. Simply record your meter reading at the beginning of a measurement period and again at the end of that period.
      The difference between these two meter readings will be the water used during the period. When recording, disregard the numbers shaded in black as this is 10ths and we record in whole numbers only.
      (See the attached photo).
      Please note that your water reading is in hundred cubic feet and can easily be converted to gallons by multiplying each unit used by 748 (gallons).`
    ),
  ];

  constructor() { }

  get articles() { return [...this._articles]; }
}
