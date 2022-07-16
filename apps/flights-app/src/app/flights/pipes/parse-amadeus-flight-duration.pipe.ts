import { Pipe, PipeTransform } from '@angular/core';

import { parseAmadeusTravelDuration } from '@app/shared';

@Pipe({
  name: 'parseAmadeusFlightDuration',
})
export class ParseAmadeusFlightDurationPipe implements PipeTransform {
  transform(value: string): { hours: number; minutes: number } {
    return parseAmadeusTravelDuration(value);
  }
}
