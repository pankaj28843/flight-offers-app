import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit, OnChanges {
  @Input() label = 'Select a date';
  @Input() placeholder = '';
  @Input() control = new FormControl<Date | null>(null);
  @Input() minDate: Date | null = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (
      this.minDate instanceof Date &&
      this.control.value instanceof Date &&
      this.control.value.getTime() < this.minDate.getTime()
    ) {
      this.control.setValue(null);
    }
  }
}
