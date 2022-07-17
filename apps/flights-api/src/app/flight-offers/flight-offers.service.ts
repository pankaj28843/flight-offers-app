import { Injectable } from '@nestjs/common';

import {
  AmadeusFlightOffersRequest,
  AmadeusFlightOffersResponse,
  FlightsSearchRequestBody,
} from '@app/shared';

import { amadeusClient } from './amadeus-client';

@Injectable()
export class FlightOffersService {
  searchFlights(
    input: FlightsSearchRequestBody
  ): Promise<AmadeusFlightOffersResponse> {
    const requestDetails: AmadeusFlightOffersRequest = {
      currencyCode: input.currencyCode,
      originDestinations: input.originDestinations,
      travelers: input.travelers,
      sources: ['GDS'],
      searchCriteria: {
        flightFilters: {
          cabinRestrictions: input.cabinRestrictions,
          carrierRestrictions: {
            excludedCarrierCodes: input.excludedCarrierCodes,
            includedCarrierCodes: input.includedCarrierCodes,
          },
        },
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
