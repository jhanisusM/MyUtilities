import { Injectable } from '@angular/core';
import { FAQ } from '../shared/faq.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityFaqService {
  public _articles: FAQ[] = [
  new FAQ(
    'My Utility News',
    `State Water Board Adopts ‘Stress Test’ Approach to Water Conservation Regulation

  For Immediate Release
  Contact: George Kostyrko
  May 18, 2016
  gkostyrko@waterboards.ca.gov

  SACRAMENTO –The State Water Resources Control Board today adopted a statewide water conservation approach that replaces the prior percentage reduction-based water conservation standard with a localized “stress test” approach that mandates urban water suppliers act now to ensure at least a three year supply of water to their customers under drought conditions.

  Recognizing persistent yet less severe drought conditions throughout California, the newly adopted emergency regulation will replace the Feb. 2 emergency water conservation regulation that set specific water conservation benchmarks at the state level for each urban water supplier. Today’s adopted regulation, which will be in effect through January 2017, requires locally developed conservation standards based upon each agency’s specific circumstances.

  These standards require local water agencies to ensure a three-year supply assuming three more dry years like the ones the state experienced from 2012 to 2015. Water agencies that would face shortages under three additional dry years will be required to meet a conservation standard equal to the amount of shortage. For example, if a water agency projects it would have a 10 percent supply shortfall, their mandatory conservation standard would be 10 percent.

  “Drought conditionsare far from over, but have improved enough that we can step back from our unprecedented top-down target setting,” said State Water Board Chair Felicia Marcus. “We’ve moved to a ‘show us the water” approach, that allows local agencies to demonstrate that they are prepared for three more lousy water years. This reporting will show us what agencies plan to do, and how they do, throughout the year. Trust, but verify. In the meantime, we’ll be watching and prepared to come back with the 25 percent state mandate early next year if necessary, which we hope it won't be.

  All of the projections and calculations used to determine the new conservation standards will be disclosed publicly. They will include information provided by regional water distribution agencies (wholesale suppliers) about how regional supplies (including imported water, recycled water, groundwater, storm water, and desalinated water) would fare during three additional dry years. The regulation requires urban water supplier to continue their monthly conservation reporting

  The adopted regulation also keeps in place the specific prohibitions against certain water uses. Those prohibitions include watering down a sidewalk with a hose instead of using a broom or a brush, or over watering a landscape to where water is running off the lawn, over a sidewalk and into the gutter. Prohibitions directed to the hospitality industry also remain in place.Prohibitions against home owners associations taking action against homeowners during a declared drought remain as well.

  The adopted regulation is the result of feedback from urban water suppliers, a public workshop on April 20 to receive input on conservation needs through the summer and fall, and lessons learned since the Water Board first adopted drought emergency water conservation regulations.
  “El Nino didn’t save us, but this winter gave us some relief,” said Chair Marcus. “It’s a reprieve though, not a hall pass, for much if not all of California. We need to keep conserving, and work on more efficient practices, like keeping lawns on a water diet or transitioning away from them. We don't want to cry wolf, but we can't put our heads in the sand either.”

  As directed by Governor Edmund G. Brown Jr. in Executive Order B-37-16, the Board will separately take action to make some of the requirements of the regulation permanent. The new emergency conservation standards take effect in June and remain in effect until the end of January 2017. More information on the Board action today can be found here`
  ),
  new FAQ(
  'My Utility History',
  `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac.

  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,

  Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,`
  ),
  new FAQ(
    'Our Stragety',
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac.

    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,

    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,`
  ),
  new FAQ(
    'MD & CEO Statement',
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac.

    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,

    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,`
    ),
  new FAQ(
    'How to do business with us',
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac.

    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,

    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,`
    ),
 ];

  constructor() { }

  get articles() {
    return [...this._articles];
  }

}
