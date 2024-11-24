import { Test, TestingModule } from '@nestjs/testing';
import { TimeslotintervalsController } from './timeslotintervals.controller';
import { TimeslotintervalsService } from './timeslotintervals.service';

describe('TimeslotintervalsController', () => {
  let controller: TimeslotintervalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeslotintervalsController],
      providers: [TimeslotintervalsService],
    }).compile();

    controller = module.get<TimeslotintervalsController>(TimeslotintervalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
