import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CabinType } from '@app/shared';

@Component({
  selector: 'app-traveller-class-input',
  templateUrl: './traveller-class-input.component.html',
  styleUrls: ['./traveller-class-input.component.scss'],
})
export class TravellerClassInputComponent implements OnInit {
  availableClasses: [CabinType, string][] = [
    ['ECONOMY', 'Economy'],
    ['PREMIUM_ECONOMY', 'Premium Economy'],
    ['BUSINESS', 'Business'],
    ['FIRST', 'First'],
  ];
  @Input() control = new FormControl<CabinType>('ECONOMY');

  constructor() {}

  ngOnInit(): void {}
}
