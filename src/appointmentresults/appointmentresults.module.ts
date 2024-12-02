import { Module } from '@nestjs/common';
import { AppointmentresultsService } from './appointmentresults.service';
import { AppointmentresultsController } from './appointmentresults.controller';

@Module({
  controllers: [AppointmentresultsController],
  providers: [AppointmentresultsService],
})
export class AppointmentresultsModule {}
