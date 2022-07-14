import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import * as fs from 'node:fs';

import { AirlineDetailsService } from './airline-details.service';
import { AirlineDetails } from './types';

@Controller({
  path: '/airline-details',
})
export class AirlineDetailsController {
  constructor(private readonly airlineDetailsService: AirlineDetailsService) {}

  @Get('/:airlineIataCode')
  getData(@Param('airlineIataCode') airlineIataCode): AirlineDetails {
    const airlineDetails =
      this.airlineDetailsService.getAirlineDetails(airlineIataCode);

    if (!airlineDetails) {
      throw new NotFoundException(
        `Airline with IATA code ${airlineIataCode} not found`
      );
    }

    return airlineDetails;
  }

  @Get('/:airlineIataCode/logo')
  getAirlineLogo(@Param('airlineIataCode') airlineIataCode, @Res() res) {
    const airlineLogoImgPath =
      this.airlineDetailsService.getAirlineLogo(airlineIataCode);

    if (!fs.existsSync(airlineLogoImgPath)) {
      throw new NotFoundException(
        `Airline with IATA code ${airlineIataCode} has no logo`
      );
    }

    res.sendFile(airlineLogoImgPath);
  }
}
