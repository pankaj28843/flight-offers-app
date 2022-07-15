import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import {
  AmadeusFlightOffersResponse,
  FlightsSearchRequestBody,
  OriginDestination,
  Traveler,
} from '@app/shared-types';

@Injectable({
  providedIn: 'root',
})
export class FlightsSearchService {
  constructor(private http: HttpClient) {}

  searchFlights(
    originLocationCode: string,
    destinationLocationCode: string,
    departureDate: Date
  ): Observable<AmadeusFlightOffersResponse> {
    const originDestinations: OriginDestination[] = [
      {
        id: '1',
        originLocationCode,
        destinationLocationCode,
        departureDateTimeRange: {
          date: moment(departureDate).format('YYYY-MM-DD'),
        },
      },
    ];
    const travelers: Traveler[] = [
      {
        id: '1',
        travelerType: 'ADULT',
      },
      {
        id: '2',
        travelerType: 'CHILD',
      },
    ];
    const requestBody: FlightsSearchRequestBody = {
      currencyCode: 'DKK',
      originDestinations,
      travelers,
    };

    return this.http.post<AmadeusFlightOffersResponse>(
      '/api/flight-offers',
      requestBody
    );
  }
}
