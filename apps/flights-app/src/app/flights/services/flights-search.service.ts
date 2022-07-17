import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import {
  AmadeusFlightOffersResponse,
  CabinRestriction,
  FlightsSearchRequestBody,
  OriginDestination,
  Traveler,
} from '@app/shared';

import { FlightSearchInput, TravellersCount } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FlightsSearchService {
  constructor(private http: HttpClient) {}

  searchFlights(
    searchInput: FlightSearchInput
  ): Observable<AmadeusFlightOffersResponse> {
    const originDestinations = this.buildOriginDestinations(searchInput);
    const travelers = this.buildTravelersList(searchInput.travellersCount);
    const cabinRestrictions = this.buildCabinRestrictions(
      searchInput,
      originDestinations
    );

    const requestBody: FlightsSearchRequestBody = {
      currencyCode: 'DKK',
      originDestinations,
      travelers,
      cabinRestrictions,
    };

    return this.http.post<AmadeusFlightOffersResponse>(
      '/api/flight-offers',
      requestBody
    );
  }

  private buildOriginDestinations(
    searchInput: FlightSearchInput
  ): OriginDestination[] {
    const originDestinations: OriginDestination[] = [
      {
        id: '1',
        originLocationCode: searchInput.origin.code,
        destinationLocationCode: searchInput.destination.code,
        departureDateTimeRange: {
          date: moment(searchInput.departureDate).format('YYYY-MM-DD'),
        },
      },
    ];

    if (searchInput.returnDate) {
      originDestinations.push({
        id: '2',
        originLocationCode: searchInput.destination.code,
        destinationLocationCode: searchInput.origin.code,
        departureDateTimeRange: {
          date: moment(searchInput.returnDate).format('YYYY-MM-DD'),
        },
      });
    }
    return originDestinations;
  }

  private buildTravelersList(travellersCount: TravellersCount): Traveler[] {
    let id = 1;
    const travelers: Traveler[] = [];

    new Array(travellersCount.adults).fill(true).forEach(() => {
      travelers.push({
        id: id.toString(),
        travelerType: 'ADULT',
      });
      id++;
    });

    new Array(travellersCount.children).fill(true).forEach(() => {
      travelers.push({
        id: id.toString(),
        travelerType: 'CHILD',
      });
      id++;
    });

    new Array(travellersCount.infants).fill(true).forEach((_, index) => {
      travelers.push({
        id: id.toString(),
        travelerType: 'HELD_INFANT',
        associatedAdultId: (index + 1).toString(),
      });
      id++;
    });

    return travelers;
  }

  private buildCabinRestrictions(
    searchInput: FlightSearchInput,
    originDestinations: OriginDestination[]
  ): CabinRestriction[] {
    return originDestinations.map(({ id: originDestinationId }) => ({
      cabin: searchInput.travellerClass,
      coverage: 'ALL_SEGMENTS',
      originDestinationIds: [originDestinationId],
    }));
  }
}
