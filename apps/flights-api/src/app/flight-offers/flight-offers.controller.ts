import { Body, Controller, Post } from '@nestjs/common';

import { FlightSearchInput } from '@app/shared-types';

import { FlightOffersService } from './flight-offers.service';

@Controller({
  path: '/flight-offers',
})
export class FlightOffersController {
  constructor(private readonly appService: FlightOffersService) {}

  @Post('')
  searchFlights(@Body() searchRequest: FlightSearchInput) {
    return this.appService.searchFlights(searchRequest);
  }
}
