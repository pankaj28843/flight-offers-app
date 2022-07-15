import { OriginDestination, Traveler } from './amadeus';

export type FlightSearchInput = {
  currencyCode: string;
  originDestinations: OriginDestination[];
  travelers: Traveler[];
};
