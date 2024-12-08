import { Module } from '@nestjs/common';
import { FeeitemsService } from './feeitems.service';
import { FeeitemsController } from './feeitems.controller';

@Module({
  controllers: [FeeitemsController],
  providers: [FeeitemsService],
})
export class FeeitemsModule {}
