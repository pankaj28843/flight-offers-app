import { Module } from '@nestjs/common';

import { FlightOffersController } from './flight-offers.controller';
import { FlightOffersService } from './flight-offers.service';

@Module({
  imports: [],
  controllers: [FlightOffersController],
  providers: [FlightOffersService],
})
export class FlightOffersModule {}
