import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TravellerClass } from '../../types';

@Component({
  selector: 'app-traveller-class-input',
  templateUrl: './traveller-class-input.component.html',
  styleUrls: ['./traveller-class-input.component.scss'],
})
export class TravellerClassInputComponent implements OnInit {
  availableClasses = [
    TravellerClass.Economy,
    TravellerClass.PremiumEconomy,
    TravellerClass.Business,
    TravellerClass.First,
  ];
  @Input() control = new FormControl<TravellerClass>(TravellerClass.Economy);

  constructor() {}

  ngOnInit(): void {}
}
