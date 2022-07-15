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

export interface Traveler {
  id: string;
  travelerType: string;
}

export interface CabinRestriction {
  cabin: string;
  coverage: string;
  originDestinationIds: string[];
}

export interface CarrierRestrictions {
  excludedCarrierCodes: string[];
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
