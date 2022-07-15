import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { AmadeusFlightOffersResponse } from '@app/shared-types';

import { FlightsSearchService } from '../../services';
import { FlightSearchInput } from '../../types';

@Component({
  templateUrl: './flights-search-page.component.html',
  styleUrls: ['./flights-search-page.component.css'],
})
export class FlightsSearchPageComponent implements OnInit {
  searchResults?: AmadeusFlightOffersResponse;

  constructor(
    private cdr: ChangeDetectorRef,
    private flightsSearchService: FlightsSearchService
  ) {}

  ngOnInit(): void {}

  onSearch(searchInput: FlightSearchInput): void {
    this.searchResults = undefined;
    this.cdr.markForCheck();

    this.flightsSearchService
      .searchFlights(
        searchInput.origin.code,
        searchInput.destination.code,
        searchInput.departureDate
      )
      .subscribe({
        next: (data) => {
          this.searchResults = data;
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
