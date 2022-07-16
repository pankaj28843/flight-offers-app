import { Body, Controller, Post } from '@nestjs/common';

import { FlightsSearchRequestBody } from '@app/shared';

import { FlightOffersService } from './flight-offers.service';

@Controller({
  path: '/flight-offers',
})
export class FlightOffersController {
  constructor(private readonly appService: FlightOffersService) {}

  @Post('')
  searchFlights(@Body() searchRequest: FlightsSearchRequestBody) {
    return this.appService.searchFlights(searchRequest);
  }
}
