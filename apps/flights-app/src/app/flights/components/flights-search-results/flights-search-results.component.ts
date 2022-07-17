import { Component, Input, OnInit } from '@angular/core';

import { AmadeusFlightOffersResponse } from '@app/shared';

@Component({
  selector: 'app-flights-search-results',
  templateUrl: './flights-search-results.component.html',
  styleUrls: ['./flights-search-results.component.scss'],
})
export class FlightsSearchResultsComponent implements OnInit {
  @Input() searchResults?: AmadeusFlightOffersResponse;

  constructor() {}

  ngOnInit(): void {}
}
