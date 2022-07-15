import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { TravellersCount } from '../../types';

@Component({
  selector: 'app-traveller-input',
  templateUrl: './traveller-input.component.html',
  styleUrls: ['./traveller-input.component.scss'],
})
export class TravellerInputComponent {
  @Input() control = new FormControl<TravellersCount>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  readonly maxAllowedAdultsCount = 9;
  readonly maxAllowedTotalCount = 18;

  isOpen = false;
  faAngleDown = faAngleDown;
  travellersCount = this.getCurrentValue();

  constructor(private cdr: ChangeDetectorRef) {}

  getMaxChildrenCount(): number {
    const currentValue = this.getCurrentValue();
    return (
      this.maxAllowedTotalCount - currentValue.adults - currentValue.infants
    );
  }

  onAdultsCountChange(count: number): void {
    const previousValue = this.getCurrentValue();
    this.control.setValue({
      ...previousValue,
      adults: count,
      infants: Math.min(previousValue.infants, count),
    });
    this.updateTravellersCount();
  }

  onChildrenCountChange(count: number): void {
    this.control.setValue({
      ...this.getCurrentValue(),
      children: count,
    });
    this.updateTravellersCount();
  }

  onInfantsCountChange(count: number): void {
    this.control.setValue({
      ...this.getCurrentValue(),
      infants: count,
    });
    this.updateTravellersCount();
  }

  getCurrentValue(): TravellersCount {
    return this.control.getRawValue() as TravellersCount;
  }

  updateTravellersCount(): void {
    this.travellersCount = this.getCurrentValue();
    this.cdr.markForCheck();
  }
}
