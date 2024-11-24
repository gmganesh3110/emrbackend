import { Test, TestingModule } from '@nestjs/testing';
import { TimeslotintervalsService } from './timeslotintervals.service';

describe('TimeslotintervalsService', () => {
  let service: TimeslotintervalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeslotintervalsService],
    }).compile();

    service = module.get<TimeslotintervalsService>(TimeslotintervalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
