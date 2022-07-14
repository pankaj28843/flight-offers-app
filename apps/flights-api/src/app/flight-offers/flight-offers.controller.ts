import { Controller, Get } from '@nestjs/common';

import { FlightOffersService } from './flight-offers.service';

@Controller({
  path: '/flight-offers',
})
export class FlightOffersController {
  constructor(private readonly appService: FlightOffersService) {}

  @Get()
  searchFlights() {
    return this.appService.searchFlights();
  }
}
