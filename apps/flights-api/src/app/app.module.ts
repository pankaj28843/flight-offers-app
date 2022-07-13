import { Module } from '@nestjs/common';

import { FlightOffersModule } from './flight-offers';

@Module({
  imports: [FlightOffersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
