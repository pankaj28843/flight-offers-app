export interface Departure {
  iataCode: string;
  terminal: string;
  at: Date;
}

export interface Arrival {
  iataCode: string;
  terminal: string;
  at: Date;
}

export interface Aircraft {
  code: string;
}

export interface OperatingAirline {
  carrierCode: string;
}

export interface FlightSegment {
  departure: Departure;
  arrival: Arrival;
  carrierCode: string;
  number: string;
  aircraft: Aircraft;
  operating: OperatingAirline;
  duration: string;
  id: string;
  numberOfStops: number;
  blacklistedInEU: boolean;
}

export interface FlightItinerary {
  duration: string;
  segments: FlightSegment[];
}

export interface AirlineFee {
  amount: string;
  type: string;
}

export interface Price {
  currency: string;
  total: string;
  base: string;
}

export interface FlightPrice extends Price {
  fees: AirlineFee[];
  grandTotal: string;
}

export interface PricingOptions {
  fareType: string[];
  includedCheckedBagsOnly: boolean;
}

export interface IncludedCheckedBags {
  quantity: number;
}

export interface FareDetailsBySegment {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  class: string;
  includedCheckedBags: IncludedCheckedBags;
  brandedFare: string;
}

export interface TravelerPricing {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: Price;
  fareDetailsBySegment: FareDetailsBySegment[];
}

export interface FlightOffer {
  type: string;
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  lastTicketingDate: string;
  numberOfBookableSeats: number;
  itineraries: FlightItinerary[];
  price: FlightPrice;
  pricingOptions: PricingOptions;
  validatingAirlineCodes: string[];
  travelerPricings: TravelerPricing[];
}

export interface LocationsDictionary {
  [cityCode: string]: {
    cityCode: string;
    countryCode: string;
  };
}

export interface AircraftDictionary {
  [aircraftCode: number]: string;
}

export interface CurrenciesDictionary {
  [currencyCode: string]: string;
}

export interface CarriersDictionary {
  [carrierCode: string]: string;
}

export interface AmadeusDictionaries {
  locations: LocationsDictionary;
  aircraft: AircraftDictionary;
  currencies: CurrenciesDictionary;
  carriers: CarriersDictionary;
}

export interface AmadeusFlightOffersResponse {
  meta: {
    count: number;
  };
  data: FlightOffer[];
  dictionaries: AmadeusDictionaries;
}
