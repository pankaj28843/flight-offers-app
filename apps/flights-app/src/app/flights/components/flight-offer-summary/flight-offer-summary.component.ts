import { Component, Input } from '@angular/core';

import { AmadeusDictionaries, FlightOffer } from '@app/shared';

@Component({
  selector: 'app-flight-offer-summary',
  templateUrl: './flight-offer-summary.component.html',
  styleUrls: ['./flight-offer-summary.component.scss'],
})
export class FlightOfferSummaryComponent {
  @Input() flightOffer?: FlightOffer;
  @Input() amadeusDictionaries?: AmadeusDictionaries;
}
