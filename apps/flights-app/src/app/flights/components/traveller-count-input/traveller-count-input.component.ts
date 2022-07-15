import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-traveller-count-input',
  templateUrl: './traveller-count-input.component.html',
  styleUrls: ['./traveller-count-input.component.scss'],
})
export class TravellerCountInputComponent implements OnChanges {
  faMinus = faMinus;
  faPlus = faPlus;

  @Input() count = 0;
  @Input() minCount = 0;
  @Input() maxCount = 9;
  @Input() label = 'Travellers';
  @Input() helpText = 'Select the number of travellers';
  @Output() countChange = new EventEmitter<number>();

  ngOnChanges(): void {
    if (this.count < this.minCount) {
      this.count = this.minCount;
    }
    if (this.count > this.maxCount) {
      this.count = this.maxCount;
    }
  }

  increaseCount() {
    this.count = Math.min(this.count + 1, this.maxCount);
    this.countChange.emit(this.count);
  }

  decreaseCount() {
    this.count = Math.max(this.count - 1, this.minCount);
    this.countChange.emit(this.count);
  }

  canDecrease(): boolean {
    return this.count > this.minCount;
  }

  canIncrease(): boolean {
    return this.count < this.maxCount;
  }
}
