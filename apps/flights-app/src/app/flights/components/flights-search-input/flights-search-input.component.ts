import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faArrowRightArrowLeft,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { CabinType } from '@app/shared';

import { Airport, FlightSearchInput, TravellersCount } from '../../types';

@Component({
  selector: 'app-flights-search-input',
  templateUrl: './flights-search-input.component.html',
  styleUrls: ['./flights-search-input.component.scss'],
})
export class FlightsSearchInputComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<FlightSearchInput>();

  ALL_AIRPORTS: Airport[] = [
    { code: 'CPH', name: 'Copenhagen' },
    { code: 'DEL', name: 'Delhi' },
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
    { code: 'BOM', name: 'Mumbai' },
    { code: 'BKK', name: 'Bangkok' },
    { code: 'KUL', name: 'Kuala Lumpur' },
    { code: 'CAN', name: 'Guangzhou' },
    { code: 'PVG', name: 'Shanghai' },
    { code: 'SZX', name: 'Shenzhen' },
    { code: 'HND', name: 'Tokyo' },
  ];
  validAirportsForDestination: Airport[] = this.ALL_AIRPORTS;
  faArrowRightArrowLeft = faArrowRightArrowLeft;
  faSearch = faSearch;

  private readonly tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  searchFormGroup = new FormGroup({
    origin: new FormControl<Airport>(this.ALL_AIRPORTS[0], {
      validators: [Validators.required],
    }),
    destination: new FormControl<Airport>(this.ALL_AIRPORTS[1], {
      validators: [Validators.required],
    }),
    departureDate: new FormControl<Date>(this.tomorrow, {
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
    travellerClass: new FormControl<CabinType>('ECONOMY', {
      validators: [Validators.required],
    }),
  });

  private subscription = new Subscription();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription.add(
      this.searchFormGroup.controls['origin'].valueChanges.subscribe(
        (value) => {
          if (value) {
            this.limitAirportsForDestination(value);
          }
        }
      )
    );
    this.searchFormGroup.controls['origin'].setValue(this.ALL_AIRPORTS[0]);
    this.searchFormGroup.controls['destination'].setValue(this.ALL_AIRPORTS[1]);
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
    const value = this.searchFormGroup.getRawValue();

    this.search.emit({
      origin: value.origin as Airport,
      destination: value.destination as Airport,
      departureDate: value.departureDate as Date,
      returnDate: value.returnDate || undefined,
      travellersCount: value.travellersCount as TravellersCount,
      travellerClass: value.travellerClass as CabinType,
    });
  }

  limitAirportsForDestination(origin: Airport): void {
    this.validAirportsForDestination = this.ALL_AIRPORTS.filter(
      (airport) => airport.code !== origin.code
    );
    this.cdr.markForCheck();
  }
}
