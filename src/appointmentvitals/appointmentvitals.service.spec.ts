import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentvitalsService } from './appointmentvitals.service';

describe('AppointmentvitalsService', () => {
  let service: AppointmentvitalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentvitalsService],
    }).compile();

    service = module.get<AppointmentvitalsService>(AppointmentvitalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
