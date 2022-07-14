import { Module } from '@nestjs/common';

import { AirlineDetailsModule } from './airline-details/airline-details.module';
import { FlightOffersModule } from './flight-offers';

@Module({
  imports: [FlightOffersModule, AirlineDetailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
