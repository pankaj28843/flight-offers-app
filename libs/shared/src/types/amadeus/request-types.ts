export interface DepartureDateTimeRange {
  date: string;
  time?: string;
}

export interface OriginDestination {
  id: string;
  originLocationCode: string;
  destinationLocationCode: string;
  departureDateTimeRange: DepartureDateTimeRange;
}

export type TravelerType =
  | 'ADULT'
  | 'CHILD'
  | 'SENIOR'
  | 'YOUNG'
  | 'HELD_INFANT'
  | 'SEATED_INFANT'
  | 'STUDENT';

export interface Traveler {
  id: string;
  travelerType: TravelerType;
  associatedAdultId?: string;
}

export type CabinType = 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';
export type CabinRestrictionCoverage =
  | 'MOST_SEGMENTS'
  | 'AT_LEAST_ONE_SEGMENT'
  | 'ALL_SEGMENTS';
export interface CabinRestriction {
  cabin: CabinType;
  coverage: CabinRestrictionCoverage;
  originDestinationIds: string[];
}

export interface CarrierRestrictions {
  excludedCarrierCodes?: string[];
  includedCarrierCodes?: string[];
}

export interface FlightFilters {
  cabinRestrictions?: CabinRestriction[];
  carrierRestrictions?: CarrierRestrictions;
}

export interface SearchCriteria {
  maxFlightOffers?: number;
  flightFilters?: FlightFilters;
}

export interface AmadeusFlightOffersRequest {
  currencyCode?: string;
  originDestinations: OriginDestination[];
  travelers: Traveler[];
  sources: ['GDS'];
  searchCriteria?: SearchCriteria;
}
