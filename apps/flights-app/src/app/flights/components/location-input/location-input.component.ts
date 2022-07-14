import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Airport } from '../../types';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss'],
})
export class LocationInputComponent implements OnInit, OnDestroy {
  @Input() airports: Airport[] = [];
  @Input() placeholder = 'Enter a location';
  @Input() control = new FormControl<Airport | null>(null);

  private subscription = new Subscription();

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  formatAirport(airport?: Airport): string {
    return airport ? `${airport.name} (${airport.code})` : '';
  }
}
