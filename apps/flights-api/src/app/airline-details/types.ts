export interface AirlineDetails {
  name: string;
  iata: string;
  icao: string;
  callsign: string;
  country: string;
}

export interface AirlineDetailsWithLogo extends AirlineDetails {
  logo: string | null;
}
