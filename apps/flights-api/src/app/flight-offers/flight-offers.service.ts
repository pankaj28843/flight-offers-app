import {
  AmadeusFlightOffersRequest,
  AmadeusFlightOffersResponse,
} from '@app/shared-types';
import { Injectable } from '@nestjs/common';

import { amadeusClient } from './amadeus-client';

@Injectable()
export class FlightOffersService {
  getData(): Promise<AmadeusFlightOffersResponse> {
    const requestDetails: AmadeusFlightOffersRequest = {
      currencyCode: 'INR',
      originDestinations: [
        {
          id: '1',
          originLocationCode: 'DEL',
          destinationLocationCode: 'CPH',
          departureDateTimeRange: {
            date: '2022-11-01',
            time: '10:00:00',
          },
        },
        {
          id: '2',
          originLocationCode: 'CPH',
          destinationLocationCode: 'DEL',
          departureDateTimeRange: {
            date: '2022-11-05',
            time: '17:00:00',
          },
        },
      ],
      travelers: [
        {
          id: '1',
          travelerType: 'ADULT',
        },
        {
          id: '2',
          travelerType: 'CHILD',
        },
      ],
      sources: ['GDS'],
      searchCriteria: {
        // maxFlightOffers: 2,
        // flightFilters: {
        //   cabinRestrictions: [
        //     {
        //       cabin: 'BUSINESS',
        //       coverage: 'MOST_SEGMENTS',
        //       originDestinationIds: ['1'],
        //     },
        //   ],
        //   carrierRestrictions: {
        //     excludedCarrierCodes: [],
        //   },
        // },
      },
    };
    return amadeusClient.shopping.flightOffersSearch
      .post(JSON.stringify(requestDetails))
      .then(function (response) {
        return response.result as AmadeusFlightOffersResponse;
      })
      .catch(function (responseError) {
        return responseError;
      });
  }
}
