import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-traveller-input',
  templateUrl: './traveller-input.component.html',
  styleUrls: ['./traveller-input.component.scss'],
})
export class TravellerInputComponent {
  @Input() adultsCount = 1;
  @Input() childrenCount = 0;
  @Input() infantsCount = 0;
  @Output() countChange = new EventEmitter<{
    adults: number;
    children: number;
    infants: number;
  }>();

  readonly maxAllowedAdultsCount = 9;
  readonly maxAllowedTotalCount = 18;

  getMaxChildrenCount(): number {
    return this.maxAllowedTotalCount - this.adultsCount - this.infantsCount;
  }

  onAdultsCountChange(count: number): void {
    this.adultsCount = count;
    this.infantsCount = Math.min(this.infantsCount, this.adultsCount);
    this.emitValueChange();
  }

  onChildrenCountChange(count: number): void {
    this.childrenCount = count;
    this.emitValueChange();
  }

  onInfantsCountChange(count: number): void {
    this.infantsCount = count;
    this.emitValueChange();
  }

  private emitValueChange(): void {
    this.countChange.emit({
      adults: this.adultsCount,
      children: this.childrenCount,
      infants: this.infantsCount,
    });
  }
}
