import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import * as path from 'node:path';

import { AIRLINE_CODES_DATA } from './data/airline-codes-data';
import { AirlineDetails } from './types';

const AIRLINE_LOGOS_DIRECTORY = path.normalize(
  path.join(path.dirname(__filename), './assets/airline-logos/')
);

@Injectable()
export class AirlineDetailsService {
  getAirlineDetails(airlineIataCode: string): AirlineDetails | undefined {
    airlineIataCode = airlineIataCode.toUpperCase().trim();
    return AIRLINE_CODES_DATA[airlineIataCode];
  }

  getAirlineLogo(airlineIataCode: string): string {
    const fallbackLogoPath = path.join(
      AIRLINE_LOGOS_DIRECTORY,
      '_AIRCRAFT.png'
    );

    const airlineDetails = this.getAirlineDetails(airlineIataCode);
    if (!airlineDetails) {
      return fallbackLogoPath;
    }

    const logoPath = path.join(
      AIRLINE_LOGOS_DIRECTORY,
      airlineDetails.icao.toUpperCase().trim() + '.png'
    );

    if (fs.existsSync(logoPath)) {
      return logoPath;
    } else {
      return fallbackLogoPath;
    }
  }
}
