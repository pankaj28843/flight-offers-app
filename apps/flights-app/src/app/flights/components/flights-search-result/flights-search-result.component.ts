import { Component, Input, OnInit } from '@angular/core';

import { AmadeusFlightOffersResponse } from '@app/shared';

@Component({
  selector: 'app-flights-search-result',
  templateUrl: './flights-search-result.component.html',
  styleUrls: ['./flights-search-result.component.scss'],
})
export class FlightsSearchResultComponent implements OnInit {
  @Input() searchResults?: AmadeusFlightOffersResponse;

  constructor() {}

  ngOnInit(): void {}
}
