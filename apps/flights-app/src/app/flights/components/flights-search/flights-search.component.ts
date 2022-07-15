import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faArrowRightArrowLeft,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { FlightsSearchService } from '../../services/flights-search.service';
import { Airport, TravellerClass, TravellersCount } from '../../types';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss'],
})
export class FlightsSearchComponent implements OnInit, OnDestroy {
  supportedAirports: { code: string; name: string }[] = [
    { code: 'SFO', name: 'San Francisco' },
    { code: 'LAX', name: 'Los Angeles' },
    { code: 'JFK', name: 'New York' },
    { code: 'LHR', name: 'London' },
    { code: 'CDG', name: 'Paris' },
    { code: 'HKG', name: 'Hong Kong' },
    { code: 'MIA', name: 'Miami' },
    { code: 'SIN', name: 'Singapore' },
    { code: 'PEK', name: 'Beijing' },
    { code: 'ICN', name: 'Seoul' },
    { code: 'FRA', name: 'Frankfurt' },
    { code: 'DEL', name: 'Delhi' },
    { code: 'BOM', name: 'Mumbai' },
    { code: 'BKK', name: 'Bangkok' },
    { code: 'KUL', name: 'Kuala Lumpur' },
    { code: 'CAN', name: 'Guangzhou' },
    { code: 'PVG', name: 'Shanghai' },
    { code: 'SZX', name: 'Shenzhen' },
    { code: 'HND', name: 'Tokyo' },
  ];
  faArrowRightArrowLeft = faArrowRightArrowLeft;
  faSearch = faSearch;

  private readonly tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  searchFormGroup = new FormGroup({
    origin: new FormControl<Airport | null>(null, {
      validators: [Validators.required],
    }),
    destination: new FormControl<Airport | null>(null, {
      validators: [Validators.required],
    }),
    departureDate: new FormControl<Date | null>(this.tomorrow, {
      validators: [Validators.required],
    }),
    returnDate: new FormControl<Date | null>(null, {
      validators: [],
    }),
    travellersCount: new FormControl<TravellersCount>({
      adults: 1,
      children: 0,
      infants: 0,
    }),
    travellerClass: new FormControl<TravellerClass>(TravellerClass.Economy, {
      validators: [Validators.required],
    }),
  });
  private subscription = new Subscription();

  constructor(private flightsSearchService: FlightsSearchService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.searchFormGroup.valueChanges.subscribe((value) => {
        console.log(JSON.stringify(value, null, 2));
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  formatAirport(airport?: { code: string; name: string }): string {
    return airport ? `${airport.name} (${airport.code})` : '';
  }

  onSwap(): void {
    const origin = this.searchFormGroup.controls['origin'].value;
    const destination = this.searchFormGroup.controls['destination'].value;

    this.searchFormGroup.setValue({
      ...this.searchFormGroup.getRawValue(),
      origin: destination,
      destination: origin,
    });
  }

  onSearch(): void {
    if (!this.searchFormGroup.valid) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const value = this.searchFormGroup.getRawValue()!;

    this.flightsSearchService
      .searchFlights(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        value.origin!.code,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        value.destination!.code,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        value.departureDate!
      )
      .subscribe({
        next: (data) => {
          JSON.stringify(data);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
