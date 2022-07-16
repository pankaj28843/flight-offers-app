import { OriginDestination, Traveler } from './amadeus';

export type FlightsSearchRequestBody = {
  currencyCode: string;
  originDestinations: OriginDestination[];
  travelers: Traveler[];
};
