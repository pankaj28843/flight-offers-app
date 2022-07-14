import { Module } from '@nestjs/common';

import { AirlineDetailsController } from './airline-details.controller';
import { AirlineDetailsService } from './airline-details.service';

@Module({
  imports: [],
  providers: [AirlineDetailsService],
  controllers: [AirlineDetailsController],
})
export class AirlineDetailsModule {}
