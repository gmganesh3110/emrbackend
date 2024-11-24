import { Module } from '@nestjs/common';
import { TimeslotintervalsService } from './timeslotintervals.service';
import { TimeslotintervalsController } from './timeslotintervals.controller';

@Module({
  controllers: [TimeslotintervalsController],
  providers: [TimeslotintervalsService],
})
export class TimeslotintervalsModule {}
