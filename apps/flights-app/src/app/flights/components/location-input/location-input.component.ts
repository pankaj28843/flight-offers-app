import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, map, startWith } from 'rxjs';

import { Airport } from '../../types';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss'],
})
export class LocationInputComponent implements OnChanges, OnDestroy {
  @Input() airports: Airport[] = [];
  @Input() label = 'Enter a location';
  @Input() placeholder = '';
  @Input() control = new FormControl<Airport | null>(null);

  filteredAirports!: Observable<Airport[]>;

  private subscription = new Subscription();

  ngOnChanges(): void {
    this.filteredAirports = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.airports.slice();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  formatAirport(airport?: Airport): string {
    return airport ? `${airport.name} (${airport.code})` : '';
  }

  private _filter(name: string): Airport[] {
    const filterValue = name.toLocaleLowerCase();
    return this.airports.filter(
      (airport) =>
        airport.name.toLocaleLowerCase().includes(filterValue) ||
        airport.code.toLocaleLowerCase().includes(filterValue)
    );
  }
}
