import { CabinType } from '@app/shared';

export interface Airport {
  code: string;
  name: string;
}

export interface TravellersCount {
  adults: number;
  children: number;
  infants: number;
}

export interface FlightSearchInput {
  origin: Airport;
  destination: Airport;
  departureDate: Date;
  returnDate?: Date;
  travellersCount: TravellersCount;
  travellerClass: CabinType;
}
