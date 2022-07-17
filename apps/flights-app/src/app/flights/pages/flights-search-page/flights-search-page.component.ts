import { ChangeDetectorRef, Component } from '@angular/core';

import { AmadeusFlightOffersResponse } from '@app/shared';

import { FlightsSearchService } from '../../services';
import { FlightSearchInput } from '../../types';

@Component({
  templateUrl: './flights-search-page.component.html',
  styleUrls: ['./flights-search-page.component.scss'],
})
export class FlightsSearchPageComponent {
  searchResults?: AmadeusFlightOffersResponse;
  isLoading = false;
  hasError = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private flightsSearchService: FlightsSearchService
  ) {}

  onSearch(searchInput: FlightSearchInput): void {
    this.isLoading = true;
    this.hasError = false;
    this.cdr.markForCheck();

    this.flightsSearchService.searchFlights(searchInput).subscribe({
      next: (data) => {
        this.searchResults = data;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.searchResults = undefined;
        this.hasError = true;
        this.isLoading = false;
        this.cdr.markForCheck();
        console.error(error);
      },
    });
  }
}
