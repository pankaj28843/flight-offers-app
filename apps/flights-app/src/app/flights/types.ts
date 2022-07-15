export interface Airport {
  code: string;
  name: string;
}

export enum TravellerClass {
  Economy = 'Economy',
  PremiumEconomy = 'Premium Economy',
  Business = 'Business',
  First = 'First',
}

export interface TravellersCount {
  adults: number;
  children: number;
  infants: number;
}
