import { Injectable } from '@angular/core';
import { FAQ } from './faq.model';

@Injectable({
  providedIn: 'root'
})
export class ConservationFaqService {
  public _articles: FAQ[] = [
    new FAQ(
      'Smart Initiatives',
      `
      Smart water management entails water leak detection, water consumption analysis,
      and accurate billing driven by actual usage. Meanwhile, technical and nontechnical losses in water infrastructure arise
      due to the lack of metering.At various points in the system starting from water capture sources, wastewater treatment, production,
      and distribution water is not metered, or there are very few to no mechanisms to detect leaks along the way.
      The value proposition for smart metering and accompanying applications such as data management and analytics becomes quite apparent when we look at the magnitude of losses otherwise Energy costs in water related operations such as pumping,wastewater treating, and desalination can reach up to $4 billion a year. Utilities need tools and approaches to manage these rising energy
      costs Advanced Metering Infrastructure (AMI) and Advanced Meter Reading (AMR) help to mitigate these issues.
      The High Stakes of Smart Water: $1 Trillion and 1.8 Billion People.

      https://www.wateronline.com/doc/thehighstakesof smart-water-trillion and billion people`
    ),
    new FAQ(
      'Water Quality',
      `My Utility Service’s high-quality drinking water comes from the XXX River and XXX watersheds, and meets or exceeds all state and federal drinking water standards. Stringent testing throughout the year shows that your water is safe.

      My Utility Services designs, operates and maintains the city’s water storage and distribution system to make sure your water is safe and reliable every time you turn on the tap. In addition, My Utility Services ensures water quality in a number of ways

      Ongoing inspection and cleaning reduces leaks and removes accumulated sediments from reservoirs

      A cleaning process removes sediments that naturally collect in pipelines

      Computer technologies help keep water fresher by reducing the amount of time the water spends in pipes on the way to your home

      Water quality testing stations located throughout the water system ensure citywide monitoring for potential contaminants

      A cross-connection control program makes every effort to prevent contaminating fluids from being pulled into the city’s water system

      Water Quality Report
      In accordance with the federal Safe Drinking Water Act, the city provides a water quality report each year to all residential and commercial customers. My Utility Service’s drinking water meets or exceeds all state and federal drinking water standards, and this report contains information about monitoring, testing results, answers to frequently asked questions and more. A list of additional compounds monitored for but not detected is also available.

      If you have questions about the report or your drinking water, please call the Utilities Department at XXX-XXX-XXXX or send an email to Utilities Operations and Maintenance.

      2017 Water Quality Report (English)
      2017 Water Quality Report (Chinese)
      2017 Water Quality Report (Korean)
      2017 Water Quality Report (Russian)
      2017 Water Quality Report (Spanish)
      2017 Water Quality Report (Vietnamese)
      Information can be found at the following website:
      https://www.drinktapnow.com`
    )
  ];

  constructor() { }

  get articles() {
    return [...this._articles];
  }

}
