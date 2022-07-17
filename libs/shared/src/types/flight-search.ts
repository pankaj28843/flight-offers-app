import { CabinRestriction, OriginDestination, Traveler } from './amadeus';

export type FlightsSearchRequestBody = {
  currencyCode: string;
  originDestinations: OriginDestination[];
  travelers: Traveler[];
  cabinRestrictions: CabinRestriction[];
  excludedCarrierCodes?: string[];
  includedCarrierCodes?: string[];
};
