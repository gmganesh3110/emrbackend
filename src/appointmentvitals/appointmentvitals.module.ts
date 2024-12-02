import { Module } from '@nestjs/common';
import { AppointmentvitalsService } from './appointmentvitals.service';
import { AppointmentvitalsController } from './appointmentvitals.controller';

@Module({
  controllers: [AppointmentvitalsController],
  providers: [AppointmentvitalsService],
})
export class AppointmentvitalsModule {}
